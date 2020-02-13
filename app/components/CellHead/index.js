/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import CellHeadWrapper, { CheckBoxViewWrapper } from './Wrapper';

const CellHeadView = ({
  column,
  allSelected,
  onSelectAll,
  sortOrder,
  toggleSort,
}) => {
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
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <p
          className={column.sort ? 'sort' : `${column.key}`}
          onClick={toggleSort}
        >
          {label}{' '}
          {column.sort && sortOrder[key] ? (
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
  const { columnCount, column, layout } = props;
  const { key, width, numeric, minWidth } = column;
  const isCheckBox = key === 'checkbox';

  const toggleSort = () => {
    props.onChangeSortField(column);
  };

  return (
    <CellHeadWrapper
      layout={layout}
      className={`${numeric ? 'numeric' : ''} ${isCheckBox ? 'checkbox' : ''}`}
      columnWidth={width}
      minWidth={minWidth}
      count={columnCount}
    >
      <CellHeadView toggleSort={toggleSort} {...props} />
    </CellHeadWrapper>
  );
};

export default CellHead;
