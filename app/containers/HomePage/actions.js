/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_SONGS,
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS_ERROR,
  CHANGE_QUERY,
  CHANGE_PAGE,
} from './constants';

/**
 * Load the songs, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_SONGS
 */
export function fetchSongs() {
  return {
    type: LOAD_SONGS,
  };
}

/**
 * Dispatched when the songs are loaded by the request saga
 *
 * @param  {array} songs The songs data
 *
 * @return {object}      An action object with a type of LOAD_SONGS_SUCCESS passing the songs
 */
export function songsLoaded(songs, total) {
  return {
    type: LOAD_SONGS_SUCCESS,
    songs,
    total,
  };
}

/**
 * Dispatched when loading the songs fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_SONGS_ERROR passing the error
 */
export function songsLoadingError(error) {
  return {
    type: LOAD_SONGS_ERROR,
    error,
  };
}

export function onChangeQuery(query) {
  return {
    type: CHANGE_QUERY,
    query,
  };
}

export function onChangePage(page) {
  return {
    type: CHANGE_PAGE,
    page,
  };
}
