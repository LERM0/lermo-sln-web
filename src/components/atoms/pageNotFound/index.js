import React from 'react';
import Logo from '@components/atoms/logo';
import Style from './style';

const PageNotFound = () => {
  return (
    <Style>
      <div className="content">
        <Logo /> 404 - Page Not Found
      </div>
    </Style>
  );
};

export default PageNotFound;
