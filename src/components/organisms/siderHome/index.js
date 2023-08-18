import React from 'react';
import { Menu, Layout } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import {
  IconHome, IconPlaylist, IconClassroom, IconSetting,
} from '@components/atoms/icons';

import Style from './style';

const { Sider } = Layout;

const SiderHome = ({ isCollapsed }) => {
  const router = useRouter();
  const { pathname } = router;

  const { profile } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
  }));

  let UserMenuComponent;
  // if (profile) {
  //   UserMenuComponent = (
  //     <Menu
  //       className="menu-custom"
  //       mode="inline"
  //       selectedKeys={[pathname]}
  //     >
  //       <Menu.Item key="/setting" icon={<IconSetting />}>
  //         <Link href="/profile/edit">
  //           Setting
  //         </Link>
  //       </Menu.Item>
  //     </Menu>
  //   );
  // }

  return (
    <Style>
      <Sider
        width={260}
        collapsedWidth={100}
        collapsed={isCollapsed}
        trigger={null}
        collapsible
      >
        <div className="logo">
          {/* {LogoComponent} */}
        </div>
        <Menu
          className="menu-custom menu-row"
          mode="inline"
          selectedKeys={[pathname]}
        >
          <Menu.Item key="/" icon={<IconHome />}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
        </Menu>

        {UserMenuComponent}

      </Sider>

    </Style>
  );
};

export default SiderHome;
