import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Dropdown, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import userActions from '@redux/user/actions';

import { useDispatch } from 'react-redux';
import MainButton from '../../atoms/mainButton';

import Style from './style';

const { update_noti } = userActions;

const NotiBadge = ({ data = [] }) => {
  const dispatch = useDispatch();

  const onVisibleChange = (isVisible) => {
    if (isVisible) {
      dispatch(update_noti());
    }
  };

  const link = (val) => {
    switch (val.notiType) {
      case 'video':
        return `/watch?v=${val.contentId}`;
      default:
        return '#';
    }
  };

  const count = data.filter((val) => val.status === 'UNREAD').length;

  const menu =
    data.length > 0 ? (
      <Menu style={{ width: '300px' }}>
        {data.map((val, index) => (
          <Menu.Item key={index}>
            <Link href={link(val)}>{val.message}</Link>
          </Menu.Item>
        ))}
      </Menu>
    ) : (
      <Menu style={{ display: 'none' }} />
    );

  return (
    <Style>
      <div className="setting-item">
        <Dropdown overlay={menu} onVisibleChange={onVisibleChange}>
          <Badge count={count}>
            <MainButton>
              <BellOutlined />
            </MainButton>
          </Badge>
        </Dropdown>
      </div>
    </Style>
  );
};

export default NotiBadge;
