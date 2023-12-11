import React from 'react';
import { Form, Input, Button, Row } from 'antd';
import userActions from '@redux/user/actions';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const { resetPassword } = userActions;

const ResetPasswordForm = ({ token }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onClickToSignIn = () => {
    router.push('/signin');
  };

  const onFinish = (values) => {
    dispatch(
      resetPassword({
        ...values,
        token,
      }),
    );
  };

  return (
    <Form className="signin-form" layout="vertical" name="signin" form={form} onFinish={onFinish} scrollToFirstError>
      <Form.Item>
        <Row justify="space-between">
          <h2>Reset Password</h2>{' '}
          <Button type="default" onClick={() => onClickToSignIn()}>
            Sign In
          </Button>
        </Row>
      </Form.Item>

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
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPasswordForm;
