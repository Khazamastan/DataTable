/**
 * Test the DataTable
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import LanguageProvider from 'containers/LanguageProvider';
import DataTable from 'components/DataTable';
import { browserHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { debounce } from 'lodash';
import { translationMessages } from '../../../i18n';
import configureStore from '../../../configureStore';
const sampleState = {
  data: [],
  columns: [
    {
      key: 'testCell1',
      label: 'name',
    },
    {
      key: 'testCell2',
      label: 'age',
    },
  ],
  onRowClickHandler: () => {},
  onSelectRowHandler: () => {},
};
const renderComponent = (props = {}) =>
  render(
    <DataTable
      data={props.data}
      query={{}}
      loading={null}
      loadMoreRows={() => {}}
      columns={props.columns}
      onRowClick={props.onRowClickHandler}
      onSelectRow={props.onSelectRowHandler}
    />,
  );

describe('<DataTable />', () => {
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
            <DataTable
              columns={[]}
              data={[]}
              query={{}}
              loading={null}
              loadMoreRows={() => {}}
              totalCount={0}
              onRowClick={() => {}}
              onSelectRow={() => {}}
            />
          </IntlProvider>
        </LanguageProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('test No data case', () => {
    describe('shoud show No Data Text', () => {
      sampleState.data = null;
      const { container } = renderComponent(sampleState);
      expect(container.querySelector('.no-results')).toBeDefined();
      expect(container.querySelector('.no-results').textContent).toEqual(
        'No Data',
      );
    });

    describe('shoud not show No Data Text', () => {
      sampleState.data = [{}];
      const { container } = renderComponent(sampleState);
      expect(container.querySelector('.no-results')).toBeNull();
    });
  });

  describe('test with data case', () => {
    sampleState.data = [
      {
        name: 'testValue',
        age: 20,
      },
    ];
    describe('shoud show Showing text', () => {
      const { container } = renderComponent(sampleState);
      expect(container.querySelector('.showing-text')).toBeDefined();
      expect(container.querySelector('.showing-text').textContent).toEqual(
        'Showing 1',
      );
    });

    describe('shoud show two columns headers', () => {
      const { container } = renderComponent(sampleState);
      expect(container.querySelector('.testCell1')).toBeDefined();
      expect(container.querySelector('.testCell1').textContent).toEqual(
        'name ',
      );

      expect(container.querySelector('.testCell2')).toBeDefined();
      expect(container.querySelector('.testCell2').textContent).toEqual('age ');
    });
  });
});
