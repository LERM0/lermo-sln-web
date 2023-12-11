import React, { useEffect } from 'react';
import {
  Form, Input, Button, Row,
} from 'antd';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Config from '@config';

import UserTemplate from '@components/templates/user';
import withAuth from '@components/templates/withAuth';
import Logo from '@components/atoms/logo';
import authActions from '@redux/auth/actions';

import Style from './style';

const { login } = authActions;

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const redirectToSignUp = () => {
    router.push('/signup');
  };

  const redirectToForgot = () => {
    router.push('/forgot');
  };

  const onFinish = (values) => {
    dispatch(login(values));
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
              <h2>Sign in</h2> <Button type="default" onClick={() => redirectToSignUp()}>sign up</Button>
            </Row>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
          >
            <Input type="email" placeholder="ex. user@email.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <span className="forgot-span" onClick={redirectToForgot}> Forgot Password? </span>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="img-container" />
    </Style>
  );
};

export default withAuth(UserTemplate, SignIn);
