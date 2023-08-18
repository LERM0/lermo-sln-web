import React, { useEffect } from 'react';
import {
  Form, Input, Button, Divider, Row,
} from 'antd';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Config from '@config';

import UserTemplate from '@components/templates/user';
import withAuth from '@components/templates/withAuth';
import Logo from '@components/atoms/logo';
import authActions from '@redux/auth/actions';
import userActions from '@redux/user/actions';
import { setToken, getToken, removeToken } from '@domains/auth';

import Style from './style';

const { forgot } = authActions;
const { resetPassword } = userActions;

const ForgotPage = ({ token }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const userToken = token || router.query.token;

  const { isLoadingBtn } = useSelector((state) => ({
    isLoadingBtn: state.Auth.get('isLoadingSignIn'),
  }));

  useEffect(() => {
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const redirectToSignUp = () => {
    router.push('/signup');
  };

  const redirectToSignIn = () => {
    router.push('/signin');
  };

  const onFinish = (values) => {
    if (userToken) {
      dispatch(resetPassword(values));
      router.push('/signin');
    } else {
      dispatch(forgot(values));
    }
  };

  const formComponent = () => {
    let component;

    if (userToken) {
      component = (
        <>
          <Form.Item
            label="Password"
            name="password"
            dependencies={['oldPassword']}
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  // eslint-disable-next-line prefer-promise-reject-errors
                  return Promise.reject('Please insert your password!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  // eslint-disable-next-line prefer-promise-reject-errors
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoadingBtn}>
              Reset Password
            </Button>
          </Form.Item>
        </>
      );
    } else {
      component = (
        <>
          <Form.Item
            label="Email"
            name="email"
          >
            <Input type="email" placeholder="ex. user@email.com" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoadingBtn}>
              Forgot Password
            </Button>
          </Form.Item>
        </>
      );
    }

    return component;
  };

  return (
    <Style className="guest-container">
      <div className="signin-container">
        <div className="signin-navbar">
          <Logo />
        </div>
        <Form
          className="signin-form"
          layout="vertical"
          name="signin"
          form={form}
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item>
            <Row justify="space-between">
              <h2>Sign in</h2> <Button type="default" onClick={() => redirectToSignIn()}>sign in</Button>
            </Row>
          </Form.Item>

          { formComponent() }

        </Form>
      </div>
      <div className="img-container" />
    </Style>
  );
};

export const getServerSideProps = async ({ query }) => {
  return {
    props: { token: query.token || null },
  };
};

export default withAuth(UserTemplate, ForgotPage);
