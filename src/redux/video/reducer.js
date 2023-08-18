import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  content: {},
  comments: [],
  follower: null,
  loading: null,
  videos: [],
  // isLoadingFollowBtn: false,
});

export default function videoReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.GET_VIDEO_BY_USER_SUCCESS:
      return state.set('videos', payload);

    // Get one video
    case actions.GET_VIDEO_SUCCESS:
      return state.set('content', payload);
    case actions.CLEAN_VIDEO_CONTENT:
      return state.set('content', {});
    // Get comment relate one video
    case actions.GET_VIDEO_COMMENTS_SUCCESS:
      return state.set('comments', payload);
    case actions.CLEAN_VIDEO_COMMENTS:
      return state.set('comments', []);
    // Get lists videos
    case actions.GET_VIDEOS_SUCCESS:
      return state.set('videos', payload);
    case actions.CREATE_VIDEO:
      return state;
    case actions.CREATE_VIDEO_SUCCESS:
      return state.set('videoId', payload._id)
        .set('videoType', payload.videoType);
    case actions.UPDATE_VIDEO_SUCCESS:
      return state.set('updateVideoStatus', 'success');
    case actions.GET_CATEGORIES:
      return state;
    case actions.GET_CATEGORIES_SUCCESS:
      return state.set('categories', payload);
    case actions.UPLOAD_THUMBNAIL_LOADING:
      return state.set('loading', true);
    case actions.UPLOAD_THUMBNAIL:
      return state;
    case actions.UPLOAD_VIDEO:
      return state.set('uploadVideoStatus', 'init');;
    case actions.UPLOAD_VIDEO_SUCCESS:
      return state.set('uploadVideoStatus', 'success');

    default:
      return state;
  }
}
