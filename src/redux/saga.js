import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import userSaga from './user/saga';
import videoSaga from './video/saga';
import feedSage from './feed/saga';

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), videoSaga(), feedSage()]);
}
