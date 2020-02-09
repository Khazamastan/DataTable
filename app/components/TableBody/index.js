import React from 'react';
import { Column, Table } from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

import Cell from '../Cell';
import TbodyWrapper from './Wrapper';

const TableBody = props => {
  const { data, columns } = props;
  const columsCount = columns.length;

  const rowRender = ({ index, isScrolling, key, style, parent }) => {
    const { width } = parent.props;
    const cellData = data[index];
    return (
      <div
        className="flex"
        key={key}
        onClick={props.onRowClick(cellData)}
        style={style}
      >
        {columns.map(column => {
          const columnKey = column.key;
          return (
            <Cell
              key={index + columnKey}
              data={cellData}
              cell={column}
              cellsCount={columsCount}
              i={index}
            />
          );
        })}
      </div>
    );
  };

  return (
    <TbodyWrapper>
      <AutoSizer disableHeight>
        {({ width }) => (
          <List
            ref="List"
            height={20 * 60}
            rowHeight={60}
            rowCount={data.length}
            rowRenderer={rowRender}
            width={width}
          />
        )}
      </AutoSizer>
    </TbodyWrapper>
  );
};

export default TableBody;
