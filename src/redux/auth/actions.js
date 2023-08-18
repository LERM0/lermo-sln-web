const actions = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGOUT: 'auth/LOGOUT',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_ERROR: 'auth/LOGIN_ERROR',

  LOGIN_FACEBOOK_REQUEST: 'auth/LOGIN_FACEBOOK_REQUEST',
  LOGIN_FACEBOOK_SUCCESS: 'auth/LOGIN_FACEBOOK_SUCCESS',
  LOGIN_FACEBOOK_ERROR: 'auth/LOGIN_FACEBOOK_ERROR',

  FETCH_PROFILE_REQUEST: 'auth/FETCH_PROFILE_REQUEST',
  FETCH_PROFILE_SUCCESS: 'auth/FETCH_PROFILE_SUCCESS',
  FETCH_PROFILE_ERROR: 'auth/FETCH_PROFILE_ERROR',

  SET_TOKEN: 'auth/SET_TOKEN',
  INIT_TOKEN_REQUEST: 'auth/INIT_TOKEN_REQUEST',
  INIT_TOKEN_SUCCESS: 'auth/INIT_TOKEN_SUCCESS',

  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_ERROR: 'FORGOT_PASSWORD_ERROR',

  login: (form) => ({
    type: actions.LOGIN_REQUEST,
    form,
  }),
  login_facebook: () => ({
    type: actions.LOGIN_FACEBOOK_REQUEST,
  }),
  logout: () => ({
    type: actions.LOGOUT,
  }),
  set_token: (payload) => ({
    type: actions.SET_TOKEN,
    payload,
  }),
  init_token: () => ({
    type: actions.INIT_TOKEN_REQUEST,
  }),
  fetch_profile: () => ({
    type: actions.FETCH_PROFILE_REQUEST,
  }),
  forgot: (form) => ({
    type: actions.FORGOT_PASSWORD,
    form,
  }),
};

export default actions;
