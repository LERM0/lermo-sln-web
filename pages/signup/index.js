import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Divider, Row, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import UserTemplate from '@components/templates/user';
import withAuth from '@components/templates/withAuth';
import Logo from '@components/atoms/logo';

import userActions from '@redux/user/actions';
import Style from './style';

const { register } = userActions;

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const redirectToSignIn = () => {
    router.push('/signin');
  };

  const onFinish = (values) => {
    const { email, password } = values;
    const formData = {
      email,
      password,
    };
    dispatch(register(formData));
  };

  return (
    <UserTemplate>
      <Style className="guest-container">
        <div className="signup-container">
          <div className="signup-navbar">
            <Logo />
          </div>
          <Form
            className="signup-form"
            layout="vertical"
            name="register"
            form={form}
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item>
              <Row justify="space-between">
                <h2>Sign up</h2>{' '}
                <Button type="default" onClick={() => redirectToSignIn()}>
                  sign in
                </Button>
              </Row>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input type="email" placeholder="ex. user@email.com" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
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
            <Form.Item></Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="img-container" />
      </Style>
    </UserTemplate>
  );
};

export default withAuth(UserTemplate, SignUp);
