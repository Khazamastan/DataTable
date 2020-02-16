import { selectSongs } from '../selectors';
import { initialState } from '../reducer';

describe('selectSongs', () => {
  it('should select the home state', () => {
    const homeState = initialState;
    const mockedState = {
      home: homeState,
    };
    expect(selectSongs(mockedState)).toEqual(homeState);
  });
});
