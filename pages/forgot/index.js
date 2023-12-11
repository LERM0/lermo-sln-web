import React from 'react';
import { useRouter } from 'next/router';

import UserTemplate from '@components/templates/user';
import Logo from '@components/atoms/logo';

import Style from './style';
import ForgetPasswordForm from '@components/organisms/forms/forgetPasswordForm';
import ResetPasswordForm from '@root/src/components/organisms/forms/resetPasswordForm';

const ForgotPage = () => {
  const router = useRouter();

  const { token: forgetPasswordToken } = router.query;

  return (
    <Style className="guest-container">
      <div className="signin-container">
        <div className="signin-navbar">
          <Logo />
        </div>

        {forgetPasswordToken ? <ResetPasswordForm /> : <ForgetPasswordForm />}
      </div>

      <div className="img-container" />
    </Style>
  );
};

ForgotPage.Layout = UserTemplate;

export default ForgotPage;
