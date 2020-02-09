/*
 * SongsReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_SONGS_SUCCESS, LOAD_SONGS, LOAD_SONGS_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  songs: false,
};

/* eslint-disable default-case, no-param-reassign */
const photosReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_SONGS:
        draft.loading = true;
        draft.error = false;
        draft.songs = false;
        break;

      case LOAD_SONGS_SUCCESS:
        draft.songs = action.songs;
        draft.loading = false;
        break;

      case LOAD_SONGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default photosReducer;
