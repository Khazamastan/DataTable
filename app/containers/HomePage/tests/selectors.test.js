import { selectPhotos } from '../selectors';

describe('selectPhotos', () => {
  it('should select the home state', () => {
    const homeState = {
      loading: false,
      error: false,
      songs: false,
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectPhotos(mockedState)).toEqual(homeState);
  });
});
