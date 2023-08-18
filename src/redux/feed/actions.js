const actions = {

  GET_FEEDS: 'GET_FEEDS',
  GET_FEEDS_SUCCESS: 'GET_FEEDS_SUCCESS',
  GET_FEEDS_FAIL: 'GET_FEEDS_FAIL',

  GET_SPACE_FEED: 'GET_SPACE_FEED',
  GET_SPACE_FEED_SUCCESS: 'GET_SPACE_FEED_SUCCESS',
  GET_SPACE_FEED_FAIL: 'GET_SPACE_FEED_FAIL',

  GET_MY_FEED: 'GET_MY_FEED',
  GET_MY_FEED_SUCCESS: 'GET_MY_FEED_SUCCESS',
  GET_MY_FEED_FAIL: 'GET_MY_FEED_FAIL',

  UPDATE_FEEDS_PAGE: 'UPDATE_FEEDS_PAGE',
  FEED_POSITION: 'FEED_POSITION',

  UPDATE_SPACE_FEED_PAGE: 'UPDATE_SPACE_FEED_PAGE',
  SPACE_FEED_POSITION: 'SPACE_FEED_POSITION',

  CLEAN_SPACE_FEED_DATA: 'CLEAN_SPACE_FEED_DATA',
  CLEAN_FEED_DATA: 'CLEAN_FEED_DATA',

  clean_feed: () => ({
    type: actions.CLEAN_FEED_DATA,
  }),

  clean_space_feed: () => ({
    type: actions.CLEAN_SPACE_FEED_DATA,
  }),

  get_feeds: (page, limit, uid) => ({
    type: actions.GET_FEEDS,
    payload: {
      page,
      limit,
      uid,
    },
  }),

  get_space_feeds: (page, limit, uid) => ({
    type: actions.GET_SPACE_FEED,
    payload: {
      page,
      limit,
      uid,
    },
  }),

  get_my_feed: (page, limit) => ({
    type: actions.GET_MY_FEED,
    payload: {
      page,
      limit,
    },
  }),

  update_feed_page: (page) => {
    return (
      {
        type: actions.UPDATE_FEEDS_PAGE,
        payload: {
          page,
        },
      });
  },

  feed_position: (position) => ({
    type: actions.FEED_POSITION,
    payload: {
      position,
    },
  }),

  update_space_feed_page: (page) => ({
    type: actions.UPDATE_SPACE_FEED_PAGE,
    payload: {
      page,
    },
  }),

  space_feed_position: (position) => ({
    type: actions.SPACE_FEED_POSITION,
    payload: {
      position,
    },
  }),

  clear_space_feed_data: () => ({
    type: actions.CLEAN_SPACE_FEED_DATA,
  }),
};

export default actions;
