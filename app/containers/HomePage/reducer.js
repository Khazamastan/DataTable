/*
 * SongsReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS,
  LOAD_SONGS_ERROR,
  CHANGE_QUERY,
  CHANGE_PAGE,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  query: {
    search: '',
    page: 0,
  },
  total: 0,
  songs: false,
};

/* eslint-disable default-case, no-param-reassign */
const songsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_SONGS:
        draft.loading = true;
        draft.error = false;
        draft.songs = false;
        break;

      case LOAD_SONGS_SUCCESS:
        draft.songs = draft.songs || [];
        if (action.songs) {
          draft.songs = draft.songs.concat(action.songs);
        }
        draft.total = action.total;
        draft.loading = false;
        break;

      case LOAD_SONGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case CHANGE_QUERY:
        draft.loading = true;
        draft.error = false;
        draft.songs = false;
        draft.total = 0;
        draft.query.search = action.query;
        draft.query.page = 0;
        break;
      case CHANGE_PAGE:
        draft.query.page = action.page;
        break;
    }
  });

export default songsReducer;
