import { useState, useEffect } from 'react';
import { Layout } from 'antd';

import { useWindowSize } from '@helpers/useHook';
import HeaderMain from '@components/organisms/headerMain';
import SiderHome from '@components/organisms/siderHome';
import Style from './style';

const { Content } = Layout;

const UserTemplate = ({ children }) => {
  return (
    <Style>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Style>
  );
};

export const UserSideMenuTemplate = ({ children }) => {
  const [width] = useWindowSize();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClickCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (window.innerWidth < 992) {
      setIsCollapsed(true);
    }
  }, []);

  useEffect(() => {
    if (width === 0) return;

    if (width >= 992) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }
  }, [width]);

  return (
    <Style>
      <Layout>
        <HeaderMain onClickCollapsed={onClickCollapsed} />
        <SiderHome isCollapsed={isCollapsed} />
        <Content className={isCollapsed ? '' : 'layout-collapsed'}>{children}</Content>
      </Layout>
    </Style>
  );
};

export const UserTopbarTemplate = ({ children }) => {
  const [width] = useWindowSize();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClickCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (window.innerWidth < 992) {
      setIsCollapsed(true);
    }
  }, []);

  useEffect(() => {
    if (width === 0) return;

    if (width >= 992) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }
  }, [width]);

  return (
    <Style>
      <Layout>
        <HeaderMain onClickCollapsed={onClickCollapsed} />
        <Content>{children}</Content>
      </Layout>
    </Style>
  );
};

export default UserTemplate;
