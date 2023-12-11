import React from 'react';
import { Form, Input, Button, Row } from 'antd';
import authActions from '@redux/auth/actions';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const { login } = authActions;

const SignInForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(login(values));
  };

  const onClickToSignUp = () => {
    router.push('/signup');
  };

  return (
    <Form layout="vertical" name="signin" form={form} onFinish={onFinish} scrollToFirstError>
      <Form.Item>
        <Row justify="space-between">
          <h2>Sign in</h2>{' '}
          <Button type="default" onClick={() => onClickToSignUp()}>
            Sign up
          </Button>
        </Row>
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input type="email" placeholder="ex. user@email.com" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Link href={'/forgot'}>Forgot Password?</Link>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;
