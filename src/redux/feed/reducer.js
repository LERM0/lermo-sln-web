import { Map } from 'immutable';
import merge from 'lodash/merge';
import actions from './actions';

const initState = new Map({
  feeds: [],
  page: 0,
  position: 0,
  spaceFeed: [],
  spacePage: 0,
  spacePosition: 0,
});

export default function feedReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.GET_FEEDS_SUCCESS: {
      const previousFeeds = state.get('feeds');
      const data = [...previousFeeds, ...payload];
      return state.set('feeds', data);
    }
    case actions.GET_SPACE_FEED_SUCCESS: {
      const previousFeeds = state.get('spaceFeed');
      const data = [...previousFeeds, ...payload];
      return state.set('spaceFeed', data);
    }
    case actions.UPDATE_FEEDS_PAGE:
      return state.set('page', payload.page);
    case actions.FEED_POSITION:
      return state.set('position', payload.position);
    case actions.UPDATE_SPACE_FEED_PAGE:
      return state.set('spacePage', payload.page);
    case actions.SPACE_FEED_POSITION:
      return state.set('spacePosition', payload.position);
    case actions.CLEAN_SPACE_FEED_DATA:
      return state.set('spaceFeed', [])
        .set('spacePosition', 0)
        .set('spacePage', 0);
    case actions.CLEAN_FEED_DATA: {
      return initState;
    }
    default:
      return state;
  }
}
