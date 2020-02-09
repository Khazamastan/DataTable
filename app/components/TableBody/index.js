import React, { useEffect } from 'react';
import { Column, Table } from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

import Cell from '../Cell';
import TbodyWrapper from './Wrapper';

const TableBody = ({
  data,
  columns,
  selectedRowIds,
  onSelectRow,
  setVirtualizerRef,
  onRowClick,
}) => {
  const columsCount = columns.length;

  const rowRender = ({ index, isScrolling, key, style, parent }) => {
    const { width } = parent.props;
    const rowData = data[index];
    const isSelected = selectedRowIds[rowData.id];
    return (
      <div
        className="flex"
        key={key}
        onClick={onRowClick(rowData)}
        style={style}
      >
        {columns.map(column => {
          const columnKey = column.key;
          return (
            <Cell
              key={index + columnKey}
              rowData={rowData}
              column={column}
              selectedRowIds={selectedRowIds}
              onSelectRow={onSelectRow}
              isSelected={isSelected}
              columsCount={columsCount}
              i={index}
            />
          );
        })}
      </div>
    );
  };

  return (
    <TbodyWrapper>
      <AutoSizer key={Math.random()}>
        {({ width }) => (
          <List
            ref={ref => setVirtualizerRef(ref)}
            height={20 * 60}
            rowHeight={60}
            rowCount={data.length}
            rowRenderer={rowRender}
            width={width}
            data={Math.random()}
          />
        )}
      </AutoSizer>
    </TbodyWrapper>
  );
};

export default TableBody;
