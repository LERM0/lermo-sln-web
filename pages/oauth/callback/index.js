import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import authActions from '@redux/auth/actions';

const { set_token } = authActions;

const OAuthCallbackPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) dispatch(set_token(token));
    window.location.href = '/';
  }, [token]);

  return (
    <div />
  );
};

export default OAuthCallbackPage;
