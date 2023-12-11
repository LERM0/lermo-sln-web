import React from 'react';

import UserTemplate from '@components/templates/user';
import Logo from '@components/atoms/logo';

import Style from './style';
import SignInForm from '@components/organisms/forms/signInForm';

const SignIn = () => {
  return (
    <Style className="guest-container">
      <div className="signin-container">
        <div className="signin-navbar">
          <Logo />
        </div>

        <SignInForm />
      </div>
      <div className="img-container" />
    </Style>
  );
};

SignIn.Layout = UserTemplate;

export default SignIn;
