import React, { useState } from 'react';
import { Form, Input, Button, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import userActions from '@redux/user/actions';
import GuestTemplate from '@root/src/components/templates/guestTemplate';

const { register } = userActions;

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onClickToSignIn = () => {
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
    <Form layout="vertical" name="register" form={form} onFinish={onFinish} scrollToFirstError>
      <Form.Item>
        <Row justify="space-between">
          <h2>Sign up</h2>{' '}
          <Button type="default" onClick={() => onClickToSignIn()}>
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
  );
};

SignUp.Layout = GuestTemplate;

export default SignUp;
