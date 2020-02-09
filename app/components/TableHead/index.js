import React from 'react';
import CellHead from '../CellHead';
import TheadWrapper from './Wrapper';

const TableHead = props => {
  debugger;
  const { columns, onSelectAll, selectedRowsOriginal, allSelected } = props;
  const columsCount = columns.length;
  const headContent = (
    <div>
      {columns.map(column => {
        const singleHeader = column;
        const { key } = column;
        return (
          <CellHead
            key={key}
            singeHeader={singleHeader}
            allSelected={allSelected}
            onSelectAll={onSelectAll}
            selectedRowsOriginal={selectedRowsOriginal}
            cellsCount={columsCount}
            cell={column}
          />
        );
      })}
    </div>
  );

  return <TheadWrapper>{headContent}</TheadWrapper>;
};

export default TableHead;
