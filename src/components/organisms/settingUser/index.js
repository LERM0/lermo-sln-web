import React from 'react';
import Link from 'next/link';
import { Avatar, Menu, Dropdown } from 'antd';
import { PlayCircleOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import authActions from '@redux/auth/actions';

import Style from './style';

const { logout } = authActions;

const SettingUser = ({ data }) => {
  const { _id, avatar } = data;
  const dispatch = useDispatch();

  const menu = (
    <Menu style={{ width: '200px' }}>
      <Menu.Item>
        <a href="/space/myspace">
          <PlayCircleOutlined /> Space
        </a>
      </Menu.Item>
      <Menu.Item>
        <Link href="/profile/edit">
          <a>
            <UserOutlined /> Profile
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item onClick={() => dispatch(logout())}>
        <LogoutOutlined /> Log out
      </Menu.Item>
    </Menu>
  );

  let UserAvatar;
  if (avatar) {
    UserAvatar = (<Avatar size={40} src={avatar} />);
  } else {
    UserAvatar = (<Avatar size={40} src="/images/default-user-avatar.jpg" />);
  }

  return (
    <Style>
      <div className="setting-item">
        <Dropdown overlay={menu}>
          {UserAvatar}
        </Dropdown>
      </div>
    </Style>
  );
};

export default SettingUser;
