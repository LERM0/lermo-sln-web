import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  MenuOutlined,
  BellOutlined,
} from '@ant-design/icons';

import {
  Input, Col, Row, Badge,
} from 'antd';
import Logo from '@components/atoms/logo';
import SettingUser from '@components/organisms/settingUser';
import { IconSearch } from '@components/atoms/icons';
import NotiBadge from '@components/organisms/notiBadge';
import feedAction from '@redux/feed/actions';
import userActions from '@redux/user/actions';
import router from 'next/router';
import Style from './style';
import MainButton from '../../atoms/mainButton';

const { Search } = Input;
const { clean_feed, get_feeds } = feedAction;
const { get_noti } = userActions;

const HeaderMain = ({ onClickCollapsed = () => {} }) => {
  const dispatch = useDispatch();
  const { profile, noti, feeds } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
    noti: state.User.get('noti'),
    feeds: state.Feed.get('feeds'),
  }));

  const onClickLogo = () => {
    dispatch(clean_feed());
    dispatch(get_feeds(0, 10));
    dispatch(get_noti());
    router.push('/');
  };

  let SettingComponent;
  let NotiBadgeCompoent;
  if (profile) {
    SettingComponent = (<div className="main-menu-item"><SettingUser data={profile} /></div>);
    NotiBadgeCompoent = (<div className="main-menu-item"><NotiBadge data={noti} /></div>);
  } else {
    SettingComponent = (
      <Link href="/signin">
        <a>
          <MainButton fit>
            Sign In
          </MainButton>
        </a>
      </Link>
    );
  }

  return (
    <Style>
      <div className="main-menu">
        <div className="main-menu-item collapse-btn" onClick={onClickCollapsed}>
          <MainButton><MenuOutlined /></MainButton>
        </div>
        <div className="main-menu-item" onClick={onClickLogo}>
          <Logo />
        </div>
      </div>
      {/* <div className="main-menu">
        <div className="main-menu-item">
          <Input
            placeholder="Search"
            prefix={<IconSearch className="site-form-item-icon" />}
          />
        </div>
      </div> */}
      <div className="main-menu">
        {/* <div className="main-menu-item">
          <MainButton fit>
            <div className="coin-content">
              <img src="../coin.svg" alt="coin" /><span>100 lecoin</span>
            </div>
          </MainButton>
        </div> */}
        { NotiBadgeCompoent }
        { SettingComponent }
      </div>
    </Style>
  );
};

export default HeaderMain;
