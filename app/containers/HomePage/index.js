/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
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
import Button from 'components/Button';
import {
  makeSelectQuery,
  makeSelectSongs,
  makeSelectSongsLoading,
  makeSelectSongsError,
  makeSelectTotal,
} from './selectors';

import { TitleCell, ThumbnailCell, LinkCell } from './TableViews';
import HomeWrapper, { HeaderWrapper } from './HomeWrapper';

import Section from './Section';
import messages from './messages';
import { fetchSongs, onChangeQuery, onChangePage } from './actions';
import reducer from './reducer';
import saga from './saga';
import 'react-virtualized/styles.css';
const key = 'home';

export function HomePage({
  loading,
  error,
  songs,
  fetchSongsData,
  onChangeSearchQuery,
  onChangePageNumber,
  totalCount,
  query,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    !loading && !songs && fetchSongsData();
    songs && setSongssList(songs);
  });

  const onSearch = searchQuery => {
    onChangeSearchQuery(searchQuery);
  };
  const [songsList, setSongssList] = useState(songs);

  const loadMoreData = () => {
    const page = query.page + 1;
    if (!loading && songs.length) {
      onChangePageNumber(page);
    }
  };
  const columns = [
    {
      key: 'checkbox',
      label: '',
      width: '50px',
      minWidth: '50px',
    },
    {
      key: 'id',
      label: 'ID',
      width: '50px',
      minWidth: '50px',
    },
    {
      key: 'thumbnailUrl',
      label: '',
      width: '70px',
      minWidth: '70px',
      view: ThumbnailCell,
    },
    {
      key: 'title',
      label: 'Title',
      width: '500px',
      view: TitleCell,
      sort: 1,
    },
    {
      key: 'albumId',
      label: 'Album ID',
      width: '450px',
      numeric: true,
      sort: 1,
    },
    {
      key: 'url',
      label: 'URL',
      width: '450px',
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
            <HeaderWrapper>
              <h2>
                <FormattedMessage {...messages.tableHeader} />
              </h2>
            </HeaderWrapper>
            <div className="table-container">
              {loading != null && songsList ? (
                <DataTable
                  data={songsList}
                  columns={columns}
                  totalCount={totalCount}
                  onRowClick={onRowClickHandler}
                  onSearch={onSearch}
                  loadMoreRows={loadMoreData}
                  loading={loading}
                  onSelectRow={onSelectRowHandler}
                  query={query}
                  // layout="fixed"
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
  songs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  songs: makeSelectSongs(),
  totalCount: makeSelectTotal(),
  loading: makeSelectSongsLoading(),
  error: makeSelectSongsError(),
  query: makeSelectQuery(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchSongsData: () => {
      dispatch(fetchSongs());
    },
    onChangeSearchQuery: value => dispatch(onChangeQuery(value)),
    onChangePageNumber: value => dispatch(onChangePage(value)),
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
