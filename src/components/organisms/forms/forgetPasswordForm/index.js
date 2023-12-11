import React from 'react';
import { Form, Input, Button, Row } from 'antd';
import authActions from '@redux/auth/actions';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const { forgot } = authActions;

const ForgetPasswordForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onClickToSignIn = () => {
    router.push('/signin');
  };

  const onFinish = (values) => {
    dispatch(forgot(values));
  };

  return (
    <Form className="signin-form" layout="vertical" name="signin" form={form} onFinish={onFinish} scrollToFirstError>
      <Form.Item>
        <Row justify="space-between">
          <h2>Forgot Password</h2>{' '}
          <Button type="default" onClick={() => onClickToSignIn()}>
            Sign In
          </Button>
        </Row>
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input type="email" placeholder="ex. user@email.com" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Forgot Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgetPasswordForm;
