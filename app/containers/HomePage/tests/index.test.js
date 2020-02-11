/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage } from '../index';

import configureStore from '../../../configureStore';

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
        <IntlProvider locale="en">
          <HomePage loading={false} error={false} photos={[]} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('fetchPhotos', () => {
      it('should be injected', () => {
        // const dispatch = jest.fn();
        // const result = mapDispatchToProps(dispatch);
      });

      it('should dispatch fetchPhotos when called', () => {
        // const dispatch = jest.fn();
        // const result = mapDispatchToProps(dispatch);
      });
    });
  });
});
