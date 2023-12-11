import React from 'react';

import SignInForm from '@components/organisms/forms/signInForm';
import GuestTemplate from '@components/templates/guestTemplate';

const SignIn = () => {
  return <SignInForm />;
};

SignIn.Layout = GuestTemplate;

export default SignIn;
