/**
 * Gets the songs of the user from Github
 */

import { call, put, takeLatest, select } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_SONGS, CHANGE_QUERY, CHANGE_PAGE } from './constants';
import { songsLoaded, songsLoadingError } from './actions';
import { makeSelectQuery } from './selectors';

/**
 * Songs request/response handler
 */
export function* getSongs() {
  const query = yield select(makeSelectQuery());
  const requestURL = `http://localhost:3004/songs?q=${
    query.search
  }&_start=${query.page * 100}&_end=${(query.page + 1) * 100}`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(songsLoaded(response.data, response.count));
  } catch (err) {
    yield put(songsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* songsData() {
  // Watches for LOAD_SONGS actions and calls getSongs when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CHANGE_PAGE, getSongs);
  yield takeLatest(LOAD_SONGS, getSongs);
  yield takeLatest(CHANGE_QUERY, getSongs);
}
