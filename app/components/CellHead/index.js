import React, { useState } from 'react';
import CellHeadWrapper, { CheckBoxViewWrapper } from './Wrapper';

const CellHeadView = ({ column, allSelected, onSelectAll, sortOrder, toggleSort }) => {
  const { label, key, headerView } = column;
  const HeaderView = headerView;
  const toggleAllSelection = () => {
    onSelectAll(null, 'all', !allSelected);
  };

  if (HeaderView) {
    return <HeaderView column={column} value={label} />;
  }
  switch (key) {
    case 'checkbox':
      return (
        <CheckBoxViewWrapper>
          <input
            checked={allSelected}
            value={allSelected || ''}
            onChange={toggleAllSelection}
            type="checkbox"
          />{' '}
          <span>&#x25BE;</span>
        </CheckBoxViewWrapper>
      );
    default:
      return (
        <p className={column.sort ? 'sort' : ''} onClick={toggleSort}>
          {label}{' '}
          {column.sort ? (
            sortOrder[key] === 'ASC' ? (
              <span className="sort-icon">&#x25BC;</span>
            ) : (
              <span className="sort-icon">&#x25B2;</span>
            )
          ) : (
            ''
          )}
        </p>
      );
  }
};

const CellHead = props => {
  const { columnCount, column } = props;
  const { key, width, numeric } = column;
  const isCheckBox = key == 'checkbox';

  const toggleSort = () => {
    props.onChangeSortField(column);
  };

  return (
    <CellHeadWrapper
      className={`${numeric ? 'numeric' : ''} ${isCheckBox ? 'checkbox' : ''}`}
      columnWidth={width}
      count={columnCount}
    >
      <CellHeadView toggleSort={toggleSort} {...props} />
    </CellHeadWrapper>
  );
};

export default CellHead;
