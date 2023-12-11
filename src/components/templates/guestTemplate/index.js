import React from 'react';

import { Layout } from 'antd';

import Style from './style';
import Logo from '@components/atoms/logo';

const GuestTemplate = ({ children }) => {
  return (
    <Layout>
      <Layout.Content>
        <Style>
          <div className="left-container">
            <div className="navbar">
              <Logo />
            </div>

            <div className="content-container">{children}</div>
          </div>

          <div className="right-container" />
        </Style>
      </Layout.Content>
    </Layout>
  );
};

export default GuestTemplate;
