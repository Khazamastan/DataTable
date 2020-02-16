/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React from 'react';
import {
  WindowScroller,
  List,
  AutoSizer,
  InfiniteLoader,
} from 'react-virtualized';
import TRLoadingPlaceholder from './rowLooaderPlacholder';
import Cell from '../Cell';
import TbodyWrapper, { TRWrapper } from './Wrapper';

const TableBody = ({
  data,
  columns,
  selectedRowIds,
  totalCount,
  onSelectRow,
  setVirtualizerRef,
  onRowClick,
  layout,
  loadMoreRows,
  loading,
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

  const rowRenderer = ({ index, key, style, parent }) => {
    const rowData = data[index];
    if (!rowData) {
      return (
        <div style={style} key={key}>
          <TRLoadingPlaceholder width={parent.props.width} />
        </div>
      );
    }

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
              layout={layout}
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

  const getWidth = () => {
    if (listRef) {
      return listRef.offsetWidth;
    }
    return 0;
  };

  const hasNextPage = data.length < totalCount;
  const rowCount = hasNextPage ? data.length + 1 : data.length;

  const isRowLoaded = ({ index }) => !loading && !!data[index];

  return (
    <TbodyWrapper>
      <WindowScroller>
        {({ height, isScrolling, registerChild, onChildScroll, scrollTop }) => (
          <div>
            <AutoSizer disableHeight onResize={onResize}>
              {({ width }) => (
                <div ref={registerChild}>
                  <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={loadMoreRows}
                    minimumBatchSize={100}
                    rowCount={rowCount}
                  >
                    {({ onRowsRendered }) => (
                      <List
                        autoHeight
                        ref={ref => passVirtualizerRef(ref)}
                        height={height}
                        rowHeight={60}
                        rowCount={rowCount}
                        onRowsRendered={onRowsRendered}
                        isScrolling={isScrolling}
                        overscanRowCount={20}
                        onScroll={onChildScroll}
                        layout="horizontal"
                        scrollTop={scrollTop}
                        rowRenderer={rowRenderer}
                        width={getWidth() || width}
                      />
                    )}
                  </InfiniteLoader>
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
