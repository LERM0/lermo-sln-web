import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import { message } from 'antd';
import Router from 'next/router';

import videoAPI from './api';
import actions from './actions';
import feedAction from '../feed/actions';

function* get_videos({ payload }) {
  const { page, limit } = payload;
  const api = yield call(videoAPI.getVideos, page, limit);

  if (api.status === '000') {
    yield put({
      type: actions.GET_VIDEOS_SUCCESS,
      payload: api.data,
    });
    return;
  }

  yield put({
    type: actions.GET_VIDEOS_ERROR,
    payload: { ...api },
  });
}

function* get_video({ payload }) {
  const { id } = payload;
  const api = yield call(videoAPI.getVideo, id);

  if (api.status === '000') {
    yield put({
      type: actions.GET_VIDEO_SUCCESS,
      payload: api.data,
    });
    return;
  }

  yield put({
    type: actions.GET_VIDEO_ERROR,
    payload: { ...api },
  });
}

function* get_video_comments({ payload }) {
  const { id } = payload;
  const api = yield call(videoAPI.getVideoComments, id);

  if (api.status === '000') {
    yield put({
      type: actions.GET_VIDEO_COMMENTS_SUCCESS,
      payload: api.data?.comments,
    });
    return;
  }

  yield put({
    type: actions.GET_VIDEO_COMMENTS_ERROR,
    payload: { ...api },
  });
}

function* getVideoByUserId(payload) {
  const { userId } = payload;
  const api = yield call(videoAPI.getVideoByUserId, userId);
  if (api.status === '000') {
    yield put({
      type: actions.GET_VIDEO_BY_USER_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t get videos');
  }
}

function* create_video(action) {
  const { payload } = action;
  const api = yield call(videoAPI.createVideo, payload);

  if (api.status === '000') {
    yield put({
      type: actions.CREATE_VIDEO_SUCCESS,
      payload: api.data,
    });
  } else {
    message.error('Can\'t create video');
    yield put({
      type: actions.CREATE_VIDEO_ERROR,
      error: api,
    });
  }
}

function* update_video(action) {
  const { payload } = action;

  const api = yield call(videoAPI.updateVideo, payload);
  if (api.status === '000') {
    message.success('Update video...');
    yield put({
      type: actions.UPDATE_VIDEO_SUCCESS,
    });
    const { status, videoType, _id } = api.data;
    yield put(feedAction.clean_feed());
    if (status === 'deleted') {
      yield put(feedAction.get_my_feed(0, 10));
      yield Router.push('/space/myspace');
    } else if (videoType === 'video' && status === 'draft') {
      yield Router.push('/space/myspace');
    } else if (videoType === 'live' && status === 'streaming') {
      yield Router.push(`/watch?v=${_id}`);
    }
  } else {
    message.error('Can\'t create video');
    yield put({
      type: actions.UPDATE_VIDEO_ERROR,
    });
  }
}

function* getCategories() {
  const api = yield call(videoAPI.getCategories);

  if (api.status === '000') {
    yield put(actions.getCategoriesSuccess(api.data.categories));
  } else {
    message.error('Can\'t get video categories');
  }
}

function* uploadVideo(payload) {
  const { data } = payload;
  const api = yield call(videoAPI.uploadVideo, data);

  if (api.status === '000') {
    yield put(actions.uploadVideoSuccess());
  } else {
    message.error('Can\'t create video');
  }
}

function* uploadThumbnail(payload) {
  const { data } = payload;
  const api = yield call(videoAPI.uploadThumbnail, data);

  if (api.status !== '000') {
    message.error('Can\'t upload video thumbnail');
  }
}

function* add_comment({ payload }) {
  const { id, comment } = payload;
  const api = yield call(videoAPI.addComment, id, comment);

  if (api.status === '000') {
    yield put({
      type: actions.ADD_COMMENT_SUCCESS,
      payload: api.data,
    });
    yield put(actions.get_video_comments(id));
    return;
  }

  yield put({
    type: actions.ADD_COMMENT_ERROR,
    payload: { ...api },
  });
}

function* update_view({ payload }) {
  const { id } = payload;
  const api = yield call(videoAPI.updateView, id);

  if (api.status === '000') {
    yield put({
      type: actions.UPDATE_VIEW_SUCCESS,
      payload: api.data,
    });
  }

  yield put({
    type: actions.UPDATE_VIEW_ERROR,
    payload: { ...api },
  });
}

function* end_live({ payload }) {
  const { videoKey } = payload;
  const api = yield call(videoAPI.endLive, videoKey);

  if (api.status === '000') {
    yield put({
      type: actions.END_LIVE_SUCCESS,
      payload: api.data,
    });

    yield Router.push('/space/myspace');
  }

  yield put({
    type: actions.END_LIVE_ERROR,
    payload: { ...api },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_VIDEO_BY_USER, getVideoByUserId),
    takeEvery(actions.GET_VIDEOS_REQUEST, get_videos),
    takeEvery(actions.GET_VIDEO_REQUEST, get_video),
    takeEvery(actions.GET_VIDEO_COMMENTS_REQUEST, get_video_comments),
    takeEvery(actions.CREATE_VIDEO_REQUEST, create_video),
    takeEvery(actions.UPDATE_VIDEO_REQUEST, update_video),
    takeEvery(actions.GET_CATEGORIES, getCategories),
    takeEvery(actions.UPLOAD_VIDEO, uploadVideo),
    takeEvery(actions.UPLOAD_THUMBNAIL, uploadThumbnail),
    takeEvery(actions.ADD_COMMENT_REQUEST, add_comment),
    takeEvery(actions.UPDATE_VIEW, update_view),
    takeEvery(actions.END_LIVE, end_live),
  ]);
}
