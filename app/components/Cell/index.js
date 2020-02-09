import React from 'react';
import CellWrapper from './Wrapper';

const CellInnerView = (data, cell, columnKey) => {
  const value = data[columnKey];
  const CellView = cell.view;
  if (CellView) {
    return <CellView cell={cell} value={value} columnKey={columnKey} />;
  }
  console.log(data.selected)
  switch (cell.key) {
    case 'checkbox':
      return (
        <input checked={data.selected} onChange={() => {}} type="checkbox" />
      );
    default:
      return <p>{cell && cell != 'NULL' ? value : '-'}</p>;
  }
};
const Cell = props => {
  const { data, cell, i, cellsCount } = props;
  const { key, width, numeric } = cell;
  return (
    <CellWrapper
      className={`${numeric ? 'numeric' : ''}`}
      columnWidth={width}
      count={cellsCount}
    >
      {CellInnerView(data, cell, key)}
    </CellWrapper>
  );
};

export default Cell;
