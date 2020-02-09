import React, { useEffect } from 'react';
import { Column, Table } from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

import Cell from '../Cell';
import TbodyWrapper from './Wrapper';

const TableBody = props => {
  const { data, columns, selectedRowIds, onSelectRow, setMyRef } = props;
  const columsCount = columns.length;
  let myRef = React.createRef();
  
  const rowRender = ({ index, isScrolling, key, style, parent }) => {
    const { width} = parent.props;
    const cellData = data[index];
    const isSelected = selectedRowIds[cellData.id];
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
              selectedRowIds ={selectedRowIds}
              onSelectRow={onSelectRow}
              isSelected={isSelected}
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
      <AutoSizer key={Math.random()}>
        {({ width }) => (
          <List
            ref={ref => setMyRef(ref)}
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
