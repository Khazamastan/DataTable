import styled from 'styled-components';
import React, { useState, useMemo, useEffect } from 'react';
import _ from 'lodash';
import TableWrapper from './TableWrapper';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const Table = ({ columns, data, onRowClick }) => {
  let noResultsConent;
  let tableVirtualizerRef;
  const [selectedRowIds, setSelectedRowIds] = useState({});
  const [allSelected, setAllSelected] = useState(null);
  const getRowIsSelected = id => selectedRowIds[id];

  const selectRow = (row, all, status) => {
    const selectedRowsMap = {};
    if (all) {
      data.forEach(row => {
        selectedRowsMap[row.id] = status;
      });
      setAllSelected(status);
    } else {
      const { id } = row;
      const isSelected = getRowIsSelected(id);
      selectedRowsMap[id] = !isSelected;
      setAllSelected(false);
    }

    Object.assign(selectedRowIds, selectedRowsMap);
    setSelectedRowIds(selectedRowIds);
    if (tableVirtualizerRef) {
      tableVirtualizerRef.forceUpdateGrid();
    }
  };

  const selectedRowsOriginal = useEffect(() => {
    const originalRowsData = [];
    data.forEach(row => {
      const isSelected = getRowIsSelected(row.id);
      if (isSelected) {
        originalRowsData.push(row);
      }
    });
    return originalRowsData;
  }, [selectedRowIds]);

  const setVirtualizerRef = ref => {
    tableVirtualizerRef = ref;
  };

  if (!data.length) {
    noResultsConent = (
      <p className="no-results" key="only">
        No Results
      </p>
    );
  }

  return (
    <div className="container">
      {selectedRowsOriginal && selectedRowsOriginal.length}
      <div className="row">
        <TableWrapper>
          <TableHead
            columns={columns}
            onSelectAll={selectRow}
            allSelected={allSelected}
            selectedRowsOriginal={selectedRowsOriginal}
          />
          <TableBody
            columns={columns}
            setVirtualizerRef={setVirtualizerRef}
            onRowClick={onRowClick}
            selectedRowIds={selectedRowIds}
            onSelectRow={selectRow}
            data={data}
          />
        </TableWrapper>
        {noResultsConent}
      </div>
    </div>
  );
};

export default Table;
