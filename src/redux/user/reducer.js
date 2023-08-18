import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  userDetail: null,
  teachers: null,
  noti: [],
});

export default function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.LOGIN_REQUEST:
      return state;
    case actions.LOGIN_SUCCESS:
      return state.set('token', payload.token);
    case actions.LOGIN_ERROR:
      return state;
    case actions.LOGOUT:
      return state.set('token', null);
    case actions.GET_USER_DETAIL_SUCCESS:
      return state.set('userDetail', payload);
    case actions.GET_FOLLOW_SUCCESS:
      return state.set('follower', payload);
    case actions.FOLLOW_SUCCESS:
      return state.set('follower', payload);
    case actions.UNFOLLOW_SUCCESS:
      return state.set('follower', payload);
    case actions.UPDATE_USER_PROFILE_SUCCESS:
      return state.set('profile', payload);
    case actions.UPLOAD_BANNER_SUCCESS:
      return state.set('bannerUrl', payload.url);
    case actions.GET_TEACHERS_SUCCESS:
      return state.set('teachers', payload);
    case actions.GET_NOTI_SUCCESS:
      return state.set('noti', payload);
    default:
      return state;
  }
}
