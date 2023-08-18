import {
  all, takeEvery, call, put, putResolve,
} from 'redux-saga/effects';
import { message } from 'antd';
import Router from 'next/router';

import authActions from '@redux/auth/actions';
import API from './api';
import actions from './actions';

function* register(payload) {
  const { form } = payload;
  const api = yield call(API.register, form);

  if (api.status === '000') {
    yield put({
      type: actions.REGISTER_SUCCESS,
      payload: api.data,
    });
    message.success('Register success, please enter signin');
    yield Router.push('/signin');
  } else {
    yield put({
      type: actions.REGISTER_ERROR,
      payload: { ...api },
    });
    message.error('Email does exists.');
  }
}

function* get_teachers() {
  const api = yield call(API.getTeachers);

  if (api.status === '000') {
    yield put({
      type: actions.GET_TEACHERS_SUCCESS,
      payload: api.data,
    });
    return;
  }
  yield put({
    type: actions.GET_TEACHERS_ERROR,
    payload: { ...api },
  });
}

function* getUser(payload) {
  const { userId } = payload;

  const api = yield call(API.getProfile, userId);
  const apiFollow = yield call(API.getFollow, userId);

  if (api.status === '000') {
    const data = {
      ...api.data,
      ...apiFollow.data,
    };
    yield putResolve({
      type: actions.GET_USER_DETAIL_SUCCESS,
      payload: data,
    });
  } else {
    message.error('Can\'t get user profile.');
  }
}

function* updateUser(payload) {
  const { form } = payload;

  const data = {};
  if (form.username) data.username = form.username;
  if (form.about) data.about = form.about;
  if (form.age) data.age = form.age;
  if (form.gender) data.gender = form.gender;
  if (form.oldPassword) data.oldPassword = form.oldPassword;
  if (form.password) data.password = form.password;

  const api = yield call(API.updateUser, data);
  if (api.status === '000') {
    yield put({
      type: actions.UPDATE_USER_PROFILE_SUCCESS,
      payload: api.data,
    });
    message.success('Update Completed');
  } else {
    message.error(api.data.message);
  }
}

function* resetPassword(payload) {
  const { form } = payload;

  const api = yield call(API.resetPassword, form);
  if (api.status === '000') {
    message.success('Update Completed');
  } else {
    message.error('Can\'t update.');
  }
}

function* uploadBanner(payload) {
  const { data } = payload;
  const api = yield call(API.uploadBanner, data);

  if (api.status === '000') {
    yield putResolve({
      type: actions.UPLOAD_BANNER_SUCCESS,
      payload: api.data,
    });
    message.success('Update Completed');
    yield put(authActions.fetch_profile());
  } else {
    message.error('Can\'t upload user profile.');
  }
}

function* uploadAvatar(payload) {
  const { data } = payload;
  const api = yield call(API.uploadAvatar, data);

  if (api.status === '000') {
    yield putResolve({
      type: actions.UPLOAD_AVATAR_SUCCESS,
      payload: api.data,
    });
    message.success('Update Completed');
    yield put(authActions.fetch_profile());
  } else {
    message.error('Can\'t upload user profile.');
  }
}

function* getFollower({ payload }) {
  const { id, isFollowId } = payload;
  const api = yield call(API.getFollow, id, isFollowId);

  if (api.status === '000') {
    yield put({
      type: actions.GET_FOLLOW_SUCCESS,
      payload: api.data,
    });
  }

  // yield put({
  //   type: actions.GET_FOLLOW_ERROR,
  //   payload: { ...api },
  // });
}

function* follow(payload) {
  const { userId } = payload;
  const api = yield call(API.follow, { followId: userId });

  if (api.status === '000') {
    yield put({
      type: actions.FOLLOW_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t follow');
  }
}

function* unfollow(payload) {
  const { userId } = payload;
  const api = yield call(API.unfollow, { followId: userId });
  if (api.status === '000') {
    yield put({
      type: actions.UNFOLLOW_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t update follower');
  }
}

function* get_noti() {
  const api = yield call(API.getNoti);

  if (api.status === '000') {
    yield put({
      type: actions.GET_NOTI_SUCCESS,
      payload: api.data,
    });
  }
}

function* update_noti() {
  const api = yield call(API.updateNoti);

  if (api.status === '000') {
    yield put({
      type: actions.UPDATE_NOTI_SUCCESS,
      payload: api.data,
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.UPDATE_USER_PROFILE, updateUser),
    takeEvery(actions.UPLOAD_AVATAR, uploadAvatar),
    takeEvery(actions.UPLOAD_BANNER, uploadBanner),
    takeEvery(actions.REGISTER_REQUEST, register),
    takeEvery(actions.GET_TEACHERS_REQUEST, get_teachers),
    takeEvery(actions.GET_USER_DETAIL_REQUEST, getUser),
    takeEvery(actions.GET_FOLLOW, getFollower),
    takeEvery(actions.FOLLOW, follow),
    takeEvery(actions.UNFOLLOW, unfollow),
    takeEvery(actions.GET_NOTI, get_noti),
    takeEvery(actions.UPDATE_NOTI, update_noti),
    takeEvery(actions.RESET_PASSWORD, resetPassword),
  ]);
}
