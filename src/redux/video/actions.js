const actions = {
  GET_VIDEO_BY_USER: 'GET_VIDEO_BY_USER',
  GET_VIDEO_BY_USER_SUCCESS: 'GET_VIDEO_BY_USER_SUCCESS',
  GET_VIDEO_BY_USER_ERROR: 'GET_VIDEO_BY_USER_ERROR',

  GET_VIDEOS_REQUEST: 'GET_VIDEOS_REQUEST',
  GET_VIDEOS_SUCCESS: 'GET_VIDEOS_SUCCESS',
  GET_VIDEOS_ERROR: 'GET_VIDEOS_ERROR',

  GET_VIDEO_REQUEST: 'GET_VIDEO_REQUEST',
  GET_VIDEO_SUCCESS: 'GET_VIDEO_SUCCESS',
  GET_VIDEO_ERROR: 'GET_VIDEO_ERROR',
  CLEAN_VIDEO_CONTENT: 'CLEAN_VIDEO_CONTENT',

  GET_VIDEO_COMMENTS_REQUEST: 'GET_VIDEO_COMMENTS_REQUEST',
  GET_VIDEO_COMMENTS_SUCCESS: 'GET_VIDEO_COMMENTS_SUCCESS',
  GET_VIDEO_COMMENTS_ERROR: 'GET_VIDEO_COMMENTS_ERROR',
  CLEAN_VIDEO_COMMENTS: 'CLEAN_VIDEO_COMMENTS',

  CREATE_VIDEO_REQUEST: 'CREATE_VIDEO_REQUEST',
  CREATE_VIDEO_SUCCESS: 'CREATE_VIDEO_SUCCESS',
  CREATE_VIDEO_FAIL: 'CREATE_VIDEO_ERROR',

  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',

  UPDATE_VIDEO_REQUEST: 'UPDATE_VIDEO_REQUEST',
  UPDATE_VIDEO_SUCCESS: 'UPDATE_VIDEO_SUCCESS',
  UPDATE_VIDEO_ERROR: 'UPDATE_VIDEO_ERROR',

  UPLOAD_VIDEO: 'UPLOAD_VIDEO',
  UPLOAD_VIDEO_SUCCESS: 'UPLOAD_VIDEO_SUCCESS',
  UPLOAD_VIDEO_FAIL: 'UPLOAD_VIDEO_ERROR',

  UPLOAD_THUMBNAIL: 'UPLOAD_THUMBNAIL',
  UPLOAD_THUMBNAIL_LOADING: 'UPLOAD_THUMBNAIL_LOADING',

  SUBMIT: 'SUBMIT',

  GET_VIDEO_FOLLOWER_REQUEST: 'GET_VIDEO_FOLLOWER_REQUEST',
  GET_VIDEO_FOLLOWER_SUCCESS: 'GET_VIDEO_FOLLOWER_SUCCESS',
  GET_VIDEO_FOLLOWER_ERROR: 'GET_VIDEO_FOLLOWER_ERROR',

  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',

  UPDATE_VIEW: 'UPDATE_VIEW',
  UPDATE_VIEW_SUCCESS: 'UPDATE_VIEW_SUCCESS',
  UPDATE_VIEW_ERROR: 'UPDATE_VIEW_ERROR',

  END_LIVE: 'END_LIVE',
  END_LIVE_SUCCESS: 'END_LIVE_SUCCESS',
  END_LIVE_ERROR: 'END_LIVE_ERROR',

  get_videos: (page, limit) => ({
    type: actions.GET_VIDEOS_REQUEST,
    payload: {
      page,
      limit,
    },
  }),
  get_video: (id) => ({
    type: actions.GET_VIDEO_REQUEST,
    payload: {
      id,
    },
  }),
  clean_video: () => ({
    type: actions.CLEAN_VIDEO_CONTENT,
  }),
  get_video_comments: (id) => ({
    type: actions.GET_VIDEO_COMMENTS_REQUEST,
    payload: {
      id,
    },
  }),
  clean_video_comments: () => ({
    type: actions.CLEAN_VIDEO_COMMENTS,
  }),
  create_video: ({ title = 'draft', videoType }) => ({
    type: actions.CREATE_VIDEO_REQUEST,
    payload: {
      title,
      videoType,
    },
  }),
  getCategories: () => ({
    type: actions.GET_CATEGORIES,
  }),
  getCategoriesSuccess: (payload) => ({
    type: actions.GET_CATEGORIES_SUCCESS,
    payload,
  }),
  update_video: (videoId, form) => ({
    type: actions.UPDATE_VIDEO_REQUEST,
    payload: {
      videoId,
      ...form,
    },
  }),
  getVideoByUserId: (userId) => ({
    type: actions.GET_VIDEO_BY_USER,
    userId,
  }),

  uploadVideo: (videoId, file) => ({
    type: actions.UPLOAD_VIDEO,
    data: {
      videoId,
      file,
    },
  }),
  uploadVideoSuccess: () => ({
    type: actions.UPLOAD_VIDEO_SUCCESS,
  }),
  uploadThumbnail: (videoId, file) => ({
    type: actions.UPLOAD_THUMBNAIL,
    data: {
      videoId,
      file,
    },
  }),
  init_loading: (payload) => ({
    type: actions.UPLOAD_THUMBNAIL_LOADING,
    payload,
  }),
  add_comment: (id, comment) => ({
    type: actions.ADD_COMMENT_REQUEST,
    payload: {
      id,
      comment,
    },
  }),
  update_view: (id) => ({
    type: actions.UPDATE_VIEW,
    payload: {
      id,
    },
  }),
  end_live: (videoKey) => ({
    type: actions.END_LIVE,
    payload: {
      videoKey,
    },
  }),
};

export default actions;
