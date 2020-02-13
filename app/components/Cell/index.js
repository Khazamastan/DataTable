/* eslint-disable react/prop-types */
import React from 'react';
import CellWrapper from './Wrapper';

const CellInnerView = ({ rowData, column, onSelectRow, selectedRowIds }) => {
  const isSelected = selectedRowIds[rowData.id] || false;
  const { key, view } = column;
  const value = rowData[key];
  const CellView = view;
  const toggleRowSelection = $event => {
    $event.stopPropagation();
    $event.nativeEvent.stopImmediatePropagation();
    onSelectRow(rowData, null);
    return false;
  };

  if (CellView) {
    return <CellView column={column} value={value} />;
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
      return <p>{column && column !== 'NULL' ? value : '-'}</p>;
  }
};
const Cell = props => {
  const { columsCount, layout } = props;
  const { width, numeric, minWidth } = props.column;
  return (
    <CellWrapper
      layout={layout}
      className={`${numeric ? 'numeric' : ''}`}
      columnWidth={width}
      minWidth={minWidth}
      count={columsCount}
    >
      <CellInnerView {...props} />
    </CellWrapper>
  );
};

export default Cell;
