/* eslint-disable react/prop-types */
import React from 'react';
import CellHead from '../CellHead';
import TheadWrapper from './Wrapper';

const TableHead = ({
  columns,
  onSelectAll,
  selectedRowsOriginal,
  allSelected,
  onChangeSortField,
  sortOrder,
  layout,
}) => {
  const columsCount = columns.length;
  const headContent = (
    <div>
      {columns.map(column => {
        const { key } = column;
        return (
          <CellHead
            key={key}
            allSelected={allSelected}
            layout={layout}
            onSelectAll={onSelectAll}
            selectedRowsOriginal={selectedRowsOriginal}
            columnCount={columsCount}
            column={column}
            sortOrder={sortOrder}
            onChangeSortField={onChangeSortField}
          />
        );
      })}
    </div>
  );

  return <TheadWrapper>{headContent}</TheadWrapper>;
};

export default TableHead;
