/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPhotos = state => state.photos || initialState;

const selectRouter = state => state.router;

const makeSelectSongsLoading = () =>
  createSelector(
    selectPhotos,
    photosState => photosState.loading,
  );

const makeSelectSongsError = () =>
  createSelector(
    selectPhotos,
    photosState => photosState.error,
  );

const makeSelectSongs = () =>
  createSelector(
    selectPhotos,
    photosState => photosState.songs,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectPhotos,
  makeSelectSongsLoading,
  makeSelectSongsError,
  makeSelectSongs,
  makeSelectLocation,
};
