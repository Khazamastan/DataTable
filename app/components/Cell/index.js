import React, { useState, useEffect } from 'react';
import CellWrapper from './Wrapper';

const CellInnerView = ({ rowData, column, onSelectRow, selectedRowIds }) => {
  const isSelected = selectedRowIds[rowData.id] || false;
  const {key, view} = column;
  const value = rowData[key];
  const CellView = view;
  const toggleRowSelection = () => {
    onSelectRow(rowData, null);
  };

  if (CellView) {
    return <CellView column={column} value={value}/>;
  }

  switch (key) {
    case 'checkbox':
      return (
        <input
          checked={isSelected}
          value={isSelected}
          name={rowData.id}
          onChange={toggleRowSelection}
          type="checkbox"
        />
      );
    default:
      return <p>{column && column != 'NULL' ? value : '-'}</p>;
  }
};
const Cell = (props) => {
  const { columsCount } = props;
  const { width, numeric } = props.column;
  return (
    <CellWrapper
      className={`${numeric ? 'numeric' : ''}`}
      columnWidth={width}
      count={columsCount}
    >
      <CellInnerView {...props} />
    </CellWrapper>
  );
};

export default Cell;
