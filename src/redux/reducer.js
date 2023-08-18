import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import User from './user/reducer';
import Video from './video/reducer';
import Feed from './feed/reducer';

export default combineReducers({
  Auth,
  User,
  Video,
  Feed,
});
