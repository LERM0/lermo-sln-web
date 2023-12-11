import { useSelector } from 'react-redux';

const AuthWrapper = ({ children }) => {
  const { profile } = useSelector((state) => {
    return {
      profile: state.Auth.get('profile'),
    };
  });

  return profile ? children : null;
};

export default AuthWrapper;
