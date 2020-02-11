/**
 * Tests for HomePage sagas
 */

import { takeLatest } from 'redux-saga/effects';

import { LOAD_SONGS } from 'containers/HomePage/constants';
// import { songsLoaded, songsLoadingError } from 'containers/HomePage/actions';

import photosData, { getPhotos } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getPhotos Saga', () => {
  let getPhotosGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getPhotosGenerator = getPhotos();

    const selectDescriptor = getPhotosGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getPhotosGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  // it('should dispatch the songsLoaded action if it requests the data successfully', () => {
  //   const response = [];
  //   const putDescriptor = getPhotosGenerator.next(response).value;
  //   expect(putDescriptor).toEqual(put(songsLoaded(response)));
  // });

  // it('should call the songsLoadingError action if the response errors', () => {
  //   const response = new Error('Some error');
  //   const putDescriptor = getPhotosGenerator.throw(response).value;
  //   expect(putDescriptor).toEqual(put(songsLoadingError(response)));
  // });
});

describe('photosDataSaga Saga', () => {
  const photosDataSaga = photosData();

  it('should start task to watch for LOAD_SONGS action', () => {
    const takeLatestDescriptor = photosDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_SONGS, getPhotos));
  });
});
