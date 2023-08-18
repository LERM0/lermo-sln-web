import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  token: null,
  profile: null,
  isCheckedTokenFromStorage: false,
  isLoadingSignIn: false,
});

export default function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.INIT_TOKEN_SUCCESS:
      return state.set('isCheckedTokenFromStorage', true)
        .set('token', payload);
    case actions.SET_TOKEN:
      return state.set('token', payload);

    case actions.LOGIN_REQUEST:
      return state
        .set('isLoadingSignIn', true);
    case actions.LOGIN_ERROR:
      return state
        .set('isLoadingSignIn', false);
    case actions.LOGOUT:
      return state
        .set('token', null)
        .set('profile', null);

    case actions.FETCH_PROFILE_SUCCESS:
      return state.set('profile', payload);
    case actions.FETCH_PROFILE_ERROR:
      return state.set('profile', null);

    default:
      return state;
  }
}
