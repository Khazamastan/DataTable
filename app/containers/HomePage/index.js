/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import DataTable from 'components/DataTable';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  makeSelectSongs,
  makeSelectSongsLoading,
  makeSelectSongsError,
} from './selectors';
import { TitleCell, ThumbnailCell, LinkCell } from './TableViews';
import HomeWrapper from './HomeWrapper';

import Section from './Section';
import messages from './messages';
import { fetchSongs } from './actions';
import reducer from './reducer';
import saga from './saga';
import 'react-virtualized/styles.css';
const key = 'home';

export function HomePage({ loading, error, photos, fetchSongsData }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    !loading && !photos && fetchSongsData();
  }, []);

  const columns = [
    {
      key: 'checkbox',
      label: '',
      width: '40px',
    },
    {
      key: 'thumbnailUrl',
      label: '',
      width: '60px',
      view: ThumbnailCell,
    },
    {
      key: 'title',
      label: 'Title',
      width: '35%',
      view: TitleCell,
      sort: 1,
    },
    {
      key: 'albumId',
      label: 'Album ID',
      width: '20%',
      numeric: true,
      sort: 1,
    },
    {
      key: 'url',
      label: 'URL',
      view: LinkCell,
      sort: 1,
    },
  ];

  const onRowClickHandler = rowData => {
    console.log(rowData);
  };
  const onSelectRowHandler = (selectedRowIds, selectedRowsOriginal) => {
    console.log(selectedRowIds, selectedRowsOriginal);
  };

  return (
    <article>
      <HomeWrapper>
        <Helmet>
          <meta name="description" content="A Table application homepage" />
        </Helmet>
        <div>
          <Section>
            <div>
              <h2>
                <FormattedMessage {...messages.homeHeader} />
              </h2>
            </div>
            <div className="table-container">
              {!loading && photos && photos.length ? (
                <DataTable
                  data={photos}
                  columns={columns}
                  onRowClick={onRowClickHandler}
                  onSelectRow={onSelectRowHandler}
                />
              ) : (
                <div className="table-loader">
                  <LoadingIndicator />
                </div>
              )}
            </div>
          </Section>
        </div>
      </HomeWrapper>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  photos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  photos: makeSelectSongs(),
  loading: makeSelectSongsLoading(),
  error: makeSelectSongsError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchSongsData: () => {
      dispatch(fetchSongs());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
