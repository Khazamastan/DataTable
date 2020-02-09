import React, { useState } from 'react';
import CellHeadWrapper, { CheckBoxViewWrapper } from './Wrapper';

const CellHeadView = ({ column, allSelected, onSelectAll }) => {
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
      return <p>{label}</p>;
  }
};

const CellHead = props => {
  const { key, width, numeric } = props.column;
  const { columnCount } = props;
  const isCheckBox = key == 'checkbox';
  return (
    <CellHeadWrapper
      className={`${numeric ? 'numeric' : ''} ${isCheckBox ? 'checkbox' : ''}`}
      columnWidth={width}
      count={columnCount}
    >
      <CellHeadView {...props} />
    </CellHeadWrapper>
  );
};

export default CellHead;
