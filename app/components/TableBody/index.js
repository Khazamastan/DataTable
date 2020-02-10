import React, { useEffect } from 'react';
import { Column, Table } from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

import Cell from '../Cell';
import TbodyWrapper, {TRWrapper} from './Wrapper';

const TableBody = ({
  data,
  columns,
  selectedRowIds,
  onSelectRow,
  setVirtualizerRef,
  onRowClick,
}) => {
  const columsCount = columns.length;
  let listRef;

  const passVirtualizerRef = (ref) =>{
    listRef = ref;
    setVirtualizerRef(ref);
  }

  const onResize = () => {
    listRef.forceUpdateGrid();
  }
  
  const rowRender = ({ index, key, style }) => {
    const rowData = data[index];
    const isSelected = selectedRowIds[rowData.id];


    const rowClickHandler = $event => {
      $event.stopPropagation();
      $event.nativeEvent.stopImmediatePropagation();
      if ($event.type && String($event.target.type) !== 'checkbox') {
        onRowClick(rowData);
      }
      return false;
    };
    return (
      <TRWrapper key={key} onClick={rowClickHandler} style={style}>
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
      </TRWrapper>
    );
  };

  return (
    <TbodyWrapper>
      <AutoSizer key={Math.random()} disableHeight onResize={onResize}>
        {({ width }) => (
          <List
            ref={ref => passVirtualizerRef(ref)}
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
