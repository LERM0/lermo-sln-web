import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import LoadingPage from '@components/atoms/loadingPage';
import authActions from '@redux/auth/actions';

const { fetch_profile, init_token } = authActions;

const withAuth = (Template, Page) => {
  const Component = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { token, profile, isChecked } = useSelector((state) => ({
      token: state.Auth.get('token'),
      profile: state.Auth.get('profile'),
      isChecked: state.Auth.get('isCheckedTokenFromStorage'),
    }));
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (!isChecked && !token) {
        dispatch(init_token());
      }
    }, []);

    useEffect(() => {
      if (!isChecked) return;

      if (token && !profile) {
        dispatch(fetch_profile());
      }
    }, [isChecked, profile]);

    // useEffect(() => {
    //   if (!isChecked) return;
    //   if (authenRoute.includes(pathname) && profile) {
    //     router.push('/');
    //   } else if (privateRoute.includes(pathname) && !profile) {
    //     router.push('/signin');
    //   } else {
    //     setIsLoading(false);
    //   }
    // }, [isChecked, pathname, profile?.username]);

    if (isLoading) return <LoadingPage />;

    return (
      <Template>
        <Page />
      </Template>
    );
  };

  return Component;
};

export default withAuth;
