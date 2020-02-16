/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSongs = state => state.songs || initialState;

const selectRouter = state => state.router;

const makeSelectSongsLoading = () =>
  createSelector(
    selectSongs,
    songsState => songsState.loading,
  );

const makeSelectSongsError = () =>
  createSelector(
    selectSongs,
    songsState => songsState.error,
  );

const makeSelectTotal = () =>
  createSelector(
    selectSongs,
    songsState => songsState.total,
  );

const makeSelectSongs = () =>
  createSelector(
    selectSongs,
    songsState => songsState.songs,
  );

const makeSelectQuery = () =>
  createSelector(
    selectSongs,
    songsState => songsState.query,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectSongs,
  makeSelectSongsLoading,
  makeSelectSongsError,
  makeSelectTotal,
  makeSelectSongs,
  makeSelectLocation,
  makeSelectQuery,
};
