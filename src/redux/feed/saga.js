import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import { message } from 'antd';

import feedAPI from './api';
import actions from './actions';

function* getFeeds({ payload }) {
  const { page, limit, uid } = payload;
  const api = yield call(feedAPI.getFeeds, page, limit, uid);

  if (api.status === '000') {
    yield put({
      type: actions.GET_FEEDS_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t get feed data');
  }
}

function* getSpaceFeed({ payload }) {
  const { page, limit, uid } = payload;
  const api = yield call(feedAPI.getFeeds, page, limit, uid);

  if (api.status === '000') {
    yield put({
      type: actions.GET_SPACE_FEED_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t get feed data');
  }
}

function* getMyFeed({ payload }) {
  const { page, limit, uid } = payload;
  const api = yield call(feedAPI.getMyFeed, page, limit, uid);

  if (api.status === '000') {
    yield put({
      type: actions.GET_SPACE_FEED_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t get feed data');
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_FEEDS, getFeeds),
    takeEvery(actions.GET_SPACE_FEED, getSpaceFeed),
    takeEvery(actions.GET_MY_FEED, getMyFeed),
  ]);
}
