/**
 * Gets the songs of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_SONGS } from './constants';
import { songsLoaded, songsLoadingError } from './actions';

/**
 * Photos request/response handler
 */
export function* getPhotos() {
  const requestURL = `https://jsonplaceholder.typicode.com/photos`;

  try {
    // Call our request helper (see 'utils/request')
    const songs = yield call(request, requestURL);
    yield put(songsLoaded(songs));
  } catch (err) {
    yield put(songsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* photosData() {
  // Watches for LOAD_SONGS actions and calls getPhotos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SONGS, getPhotos);
}
