import React from 'react';
import { useRouter } from 'next/router';

import ForgetPasswordForm from '@components/organisms/forms/forgetPasswordForm';
import ResetPasswordForm from '@root/src/components/organisms/forms/resetPasswordForm';
import GuestTemplate from '@root/src/components/templates/guestTemplate';

const ForgotPage = () => {
  const router = useRouter();
  const { token: forgetPasswordToken } = router.query;

  return forgetPasswordToken ? <ResetPasswordForm /> : <ForgetPasswordForm />;
};

ForgotPage.Layout = GuestTemplate;

export default ForgotPage;
