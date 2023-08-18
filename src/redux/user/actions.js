const actions = {
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERROR: 'REGISTER_ERROR',

  GET_TEACHERS_REQUEST: 'GET_TEACHERS_REQUEST',
  GET_TEACHERS_SUCCESS: 'GET_TEACHERS_SUCCESS',
  GET_TEACHERS_ERROR: 'GET_TEACHERS_ERROR',

  GET_USER_DETAIL_REQUEST: 'GET_USER_DETAIL_REQUEST',
  GET_USER_DETAIL_SUCCESS: 'GET_USER_DETAIL_SUCCESS',
  GET_USER_DETAIL_ERROR: 'GET_USER_DETAIL_ERROR',

  GET_FOLLOW: 'GET_FOLLOW',
  GET_FOLLOW_SUCCESS: 'GET_FOLLOW_SUCCESS',
  GET_FOLLOW_ERROR: 'GET_FOLLOW_ERROR',

  FOLLOW: 'FOLLOW',
  FOLLOW_SUCCESS: 'FOLLOW_SUCCESS',
  FOLLOW_ERROR: 'FOLLOW_ERROR',

  UNFOLLOW: 'UNFOLLOW',
  UNFOLLOW_SUCCESS: 'UNFOLLOW_SUCCESS',
  UNFOLLOW_ERROR: 'UNFOLLOW_ERROR',

  UPLOAD_BANNER: 'UPLOAD_BANNER',
  UPLOAD_BANNER_SUCCESS: 'UPLOAD_BANNER_SUCCESS',
  UPLOAD_BANNER_ERROR: 'UPLOAD_BANNER_ERROR',

  UPLOAD_AVATAR: 'UPLOAD_AVATAR',
  UPLOAD_AVATAR_SUCCESS: 'UPLOAD_AVATAR_SUCCESS',

  UPDATE_USER_PROFILE: 'UPDATE_USER_PROFILE',
  UPDATE_USER_PROFILE_SUCCESS: 'UPDATE_USER_PROFILE_SUCCESS',

  GET_NOTI: 'GET_NOTI',
  GET_NOTI_SUCCESS: 'GET_NOTI_SUCCESS',
  GET_NOTI_ERROR: 'GET_NOTI_ERROR',

  UPDATE_NOTI: 'UPDATE_NOTI',
  UPDATE_NOTI_SUCCESS: 'UPDATE_NOTI_SUCCESS',
  UPDATE_NOTI_ERROR: 'UPDATE_NOTI_ERROR',

  RESET_PASSWORD: 'RESET_PASSWORD',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR',

  register: (form) => ({
    type: actions.REGISTER_REQUEST,
    form,
  }),
  get_teachers: () => ({
    type: actions.GET_TEACHERS_REQUEST,
  }),
  getUserDetail: (pid) => ({
    type: actions.GET_USER_DETAIL_REQUEST,
    userId: pid,
  }),
  getMyProfile: () => ({
    type: actions.GET_USER_DETAIL_REQUEST,
  }),
  getFollower: (id, isFollowId) => ({
    type: actions.GET_FOLLOW,
    payload: { id, isFollowId },
  }),
  follow: (userId) => ({
    type: actions.FOLLOW,
    userId,
  }),
  unfollow: (userId) => ({
    type: actions.UNFOLLOW,
    userId,
  }),
  updateUserProfile: (form) => ({
    type: actions.UPDATE_USER_PROFILE,
    form,
  }),
  uploadBanner: (file) => ({
    type: actions.UPLOAD_BANNER,
    data: {
      file,
    },
  }),
  uploadAvatar: (file) => ({
    type: actions.UPLOAD_AVATAR,
    data: {
      file,
    },
  }),
  // getUserProfileSuccess: (payload) => ({
  //   type: actions.GET_USER_PROFILE_SUCCESS,
  //   payload
  // })
  get_noti: () => ({
    type: actions.GET_NOTI,
  }),
  update_noti: () => ({
    type: actions.UPDATE_NOTI,
  }),
  resetPassword: (form) => ({
    type: actions.RESET_PASSWORD,
    form,
  }),
};

export default actions;
