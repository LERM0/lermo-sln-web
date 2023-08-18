import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import { message } from 'antd';
// import { getToken, getRefreshToken, clearToken } from '@helpers/auth';
import Router from 'next/router';
import { setToken, getToken, removeToken } from '@domains/auth';
import authAPI from './api';

import actions from './actions';

function* login(payload) {
  const { form } = payload;
  const api = yield call(authAPI.login, form);

  if (api.status === '000') {
    const { access_token } = api.data;

    message.success('Login success');
    yield call(setToken, access_token);
    yield put({
      type: actions.LOGIN_SUCCESS,
      payload: access_token,
    });
    yield put(actions.fetch_profile());
    Router.push('/');
  } else {
    yield put({
      type: actions.LOGIN_ERROR,
      payload: { ...api },
    });
    message.error('Email or password incorrect please try again');
  }
}

function* forgot(payload) {
  const { form } = payload;
  const api = yield call(authAPI.forgot, form);

  if (api.status === '000') {
    message.success('Please check your emails');
  } else {
    message.error('Email incorrect please try again');
  }
}

function* logout() {
  yield call(removeToken);
  message.success('Logout success');
  Router.push('/signin');
}

function* init_token() {
  const token = yield call(getToken);
  yield put({
    type: actions.INIT_TOKEN_SUCCESS,
    payload: token,
  });
}

function* set_token({ payload }) {
  yield call(setToken, payload);
}

function* fetch_profile() {
  const api = yield call(authAPI.fetchProfile);

  if (api.status === '000') {
    yield put({
      type: actions.FETCH_PROFILE_SUCCESS,
      payload: api.data,
    });
  } else {
    yield put({
      type: actions.FETCH_PROFILE_ERROR,
      payload: { ...api },
    });
    yield put(actions.logout());
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN_REQUEST, login),
    takeEvery(actions.LOGOUT, logout),
    takeEvery(actions.SET_TOKEN, set_token),
    takeEvery(actions.FETCH_PROFILE_REQUEST, fetch_profile),
    takeEvery(actions.INIT_TOKEN_REQUEST, init_token),
    takeEvery(actions.FORGOT_PASSWORD, forgot),
  ]);
}
