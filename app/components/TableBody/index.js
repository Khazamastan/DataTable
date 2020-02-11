import React, { useEffect } from 'react';
import { WindowScroller, List, AutoSizer } from 'react-virtualized';
import Cell from '../Cell';
import TbodyWrapper, { TRWrapper } from './Wrapper';

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

  const passVirtualizerRef = ref => {
    listRef = ref;
    window.listEl = ref;
    setVirtualizerRef(ref);
  };

  const onResize = () => {
    listRef && listRef.forceUpdateGrid();
  };

  const rowRenderer = ({ index, key, style, isScrolling, isVisible }) => {
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
      <WindowScroller>
        {({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (
          <div>
            <AutoSizer disableHeight onResize={onResize}>
              {({ width }) => (
                <div ref={registerChild}>
                  <List
                    autoHeight
                    ref={ref => passVirtualizerRef(ref)}
                    height={height}
                    rowHeight={60}
                    isScrolling={isScrolling}
                    overscanRowCount={2}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    rowCount={data.length}
                    rowRenderer={rowRenderer}
                    width={width}
                  />
                </div>
              )}
            </AutoSizer>
          </div>
        )}
      </WindowScroller>
    </TbodyWrapper>
  );
};

export default TableBody;
