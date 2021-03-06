/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_SONGS = 'HOME/LOAD_SONGS';
export const LOAD_SONGS_SUCCESS = 'HOME/LOAD_SONGS_SUCCESS';
export const LOAD_SONGS_ERROR = 'HOME/LOAD_SONGS_ERROR';
export const CHANGE_QUERY = 'HOME/QUERY_SONGS';
export const CHANGE_PAGE = 'HOME/QUERY_CHANGE_SONGS_PAGE';
