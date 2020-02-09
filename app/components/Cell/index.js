import React, { useState, useEffect } from 'react';
import CellWrapper from './Wrapper';

const CellInnerView = props => {
  const { data, cell, key, onSelectRow, selectedRowIds} = props;
  let isSelected = selectedRowIds[data.id] || false;
  const value = data[cell.key];
  const CellView = cell.view;
  const toggleRowSelection = () => {
    onSelectRow(data, null);
  };
  if (CellView) {
    return <CellView cell={cell} value={value} columnKey={cell.key} />;
  }
  switch (cell.key) {
    case 'checkbox':
      return (
        <input
          checked={isSelected}
          value={isSelected}
          name={data.id}
          onChange={toggleRowSelection}
          type="checkbox"
        />
      );
    default:
      return <p>{cell && cell != 'NULL' ? value : '-'}</p>;
  }
};
const Cell = props => {
  const { data, cell, i, cellsCount, onSelectRow, isSelected } = props;
  const { key, width, numeric } = cell;
  return (
    <CellWrapper
      className={`${numeric ? 'numeric' : ''}`}
      columnWidth={width}
      count={cellsCount}
    >
      <CellInnerView {...props} />
    </CellWrapper>
  );
};

export default Cell;
