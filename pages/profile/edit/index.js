import ProfileBanner from '@components/atoms/profileBanner';
import Avatar from '@components/atoms/avatar';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import withAuth from '@components/templates/withAuth';
import { UserTopbarTemplate } from '@components/templates/user';

import authActions from '@redux/auth/actions';
import userActions from '@redux/user/actions';
import { useEffect, useState } from 'react';

import Style from './style';

const { TextArea } = Input;
const { Option } = Select;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-disable no-template-curly-in-string */
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const EditPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [banner, setBanner] = useState('');
  const [avatar, setAvatar] = useState('');

  const { profile } = useSelector((state) => ({
    profile: state.Auth.get('profile') || {},
  }));

  useEffect(() => {
    dispatch(authActions.fetch_profile());
  }, []);

  useEffect(() => form.resetFields(), [profile]);

  const onUploadBanner = ({ file, onSuccess }) => {
    dispatch(userActions.uploadBanner(file));
    return onSuccess('ok');
  };

  const onUploadBannerChange = (info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setBanner(imageUrl);
      });
    }
  };

  const onUploadAvatar = ({ file, onSuccess }) => {
    dispatch(userActions.uploadAvatar(file));
    return onSuccess('ok');
  };

  const onUploadAvatarChange = (info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setAvatar(imageUrl);
      });
    }
  };

  const onFinish = (value) => {
    dispatch(userActions.updateUserProfile(value));
  };

  return (
    <Style>
      <Form
        layout="vertical"
        name="editProfile"
        validateMessages={validateMessages}
        form={form}
        onFinish={onFinish}
        initialValues={{
          username: profile.username,
          email: profile.email,
          about: profile.about,
          age: profile.age,
          gender: profile.gender,
        }}
        scrollToFirstError
      >
        <main className="main">
          <div className="banner-container">
            <ProfileBanner
              editBanner="true"
              onUploadBanner={onUploadBanner}
              banner={banner || profile.banner}
              onUploadBannerChange={onUploadBannerChange}
            />
          </div>

          <div className="container">
            <div className="flex-container">
              <Avatar
                avatarUrl={avatar || profile.avatar}
                editAvatar
                onUploadAvatar={onUploadAvatar}
                onUploadAvatarChange={onUploadAvatarChange}
              />
            </div>
            <h1> Basic Information </h1>
            <Form.Item label="Username" name="username">
              <Input placeholder={profile.username} allowClear />
            </Form.Item>
            <Form.Item label="About me" name="about">
              <TextArea placeholder="" autoSize={{ minRows: 3, maxRows: 3 }} />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              style={{ display: 'inline-block', width: 'calc(50%)', paddingRight: '16px' }}
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item style={{ display: 'inline-block', width: 'calc(50%)' }} name="age" label="Age">
              <Input type="number" />
            </Form.Item>
          </div>

          <div className="container">
            <h1> Security & Privacy </h1>
            <Form.Item label="Email" name="email">
              <Input disabled type="email" placeholder="" allowClear />
            </Form.Item>
            <Form.Item label="Old Password" name="oldPassword">
              <Input.Password />
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
          </div>
          <div className="container-submit">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Form.Item>
          </div>
        </main>
      </Form>
    </Style>
  );
};

export default withAuth(UserTopbarTemplate, EditPage);
