import React from 'react';
import CellHead from '../CellHead';
import TheadWrapper from './Wrapper';

const TableHead = ({
  columns,
  onSelectAll,
  selectedRowsOriginal,
  allSelected,
  onChangeSortField,
  sortOrder
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

  return <TheadWrapper key={Math.random()}>{headContent}</TheadWrapper>;
};

export default TableHead;
