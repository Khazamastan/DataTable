/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import LanguageProvider from 'containers/LanguageProvider';
import { fetchSongs } from '../actions';
import { HomePage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { translationMessages } from '../../../i18n';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <IntlProvider locale="en" defaultLocale="en">
            <HomePage
              loading={false}
              error={false}
              query={{}}
              loadMoreRows={() => {}}
              totalCount={0}
              songs={[]}
            />
          </IntlProvider>
        </LanguageProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('fetchSongs', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.fetchSongsData).toBeDefined();
      });

      it('should dispatch fetchSongs when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.fetchSongsData();
        expect(dispatch).toHaveBeenCalledWith(fetchSongs());
      });
    });
  });
});
