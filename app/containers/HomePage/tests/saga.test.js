/**
 * Tests for HomePage sagas
 */

import { takeLatest } from 'redux-saga/effects';

import { CHANGE_PAGE } from 'containers/HomePage/constants';
// import { songsLoaded, songsLoadingError } from 'containers/HomePage/actions';

import songsData, { getSongs } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getSongs Saga', () => {
  let getSongsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getSongsGenerator = getSongs();

    const selectDescriptor = getSongsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getSongsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  // it('should dispatch the songsLoaded action if it requests the data successfully', () => {
  //   const response = [];
  //   const putDescriptor = getSongsGenerator.next(response).value;
  //   expect(putDescriptor).toEqual(put(songsLoaded(response)));
  // });

  // it('should call the songsLoadingError action if the response errors', () => {
  //   const response = new Error('Some error');
  //   const putDescriptor = getSongsGenerator.throw(response).value;
  //   expect(putDescriptor).toEqual(put(songsLoadingError(response)));
  // });
});

describe('songsDataSaga Saga', () => {
  const songsDataSaga = songsData();

  it('should start task to watch for LOAD_SONGS action', () => {
    const takeLatestDescriptor = songsDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(CHANGE_PAGE, getSongs));
  });
});
