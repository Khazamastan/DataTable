import React from 'react';
import CellHead from '../CellHead';
import TheadWrapper from './Wrapper';

const TableHead = props => {
  const { columns } = props;
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
