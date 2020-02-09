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

import Input from 'components/Input';
import Select from 'components/Select';
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

export function HomePage({loading, error, photos, fetchSongs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    !loading && !photos && fetchSongs();
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
    },
    {
      key: 'albumId',
      label: 'Album ID',
      width: '20%',
      numeric: true,
    },
    {
      key: 'url',
      label: 'URL',
      width: '350px',
      view: LinkCell,
    },
  ];

  const onRowClick = rowData => {
    // cellData.selected = true;
  };
  const onSelectRow = selectedRows => {

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
              <p className="clearfix">
                {/* <Input
              type="text"
              placeholder="Search here"
              className="search"
              onChange={onChangeQuery}
            /> */}
              </p>
            </div>
            <div className="table-container">
              {!loading && photos && photos.length ? (
                <DataTable
                  data={photos}
                  columns={columns}
                  onRowClick={onRowClick}
                  onSelectRow={onSelectRow}
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
    fetchSongs: () => {
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
