import styled from 'styled-components';
import React, { useState, useMemo, useEffect } from 'react';
import TableWrapper from './TableWrapper';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import _ from 'lodash';

const Table = props => {
  const { columns, data } = props;
  let noResultsConent;
  const stateData = {
    selectedRowIds: {},
    allSelected: true,
    selectedRowsOriginal: {},
  };

  const [selectedRowIds, setSelectedRowIds] = useState(
    stateData.selectedRowIds,
  );

  const [allSelected, setAllSelected] = useState(allSelected);

  const getRowIsSelected = id => selectedRowIds[id];

  const selectRow = (row, all, status) => {
    const selectedMap = {};
    if (all) {
      data.forEach(row => {
        selectedMap[row.id] = status;
      });
      setAllSelected(status);
    } else {
      const { id } = row;
      const isSelected = getRowIsSelected(id);
      selectedMap[id] = !isSelected;
      setAllSelected(false);
    }

    Object.assign(selectedRowIds, selectedMap);
    setSelectedRowIds(selectedRowIds);
    console.log(selectedRowIds);
    myref && myref.forceUpdateGrid();
  };

  const selectedRowsOriginal = useEffect(() => {
    const selectedRowsOriginal = [];
    data.forEach(row => {
      const isSelected = getRowIsSelected(row.id);
      if (isSelected) {
        selectedRowsOriginal.push(row);
      }
    });
    return selectedRowsOriginal;
  }, [selectedRowIds]);
  let myref;
  const setMyRef = (ref) => {
    myref= ref;
  }
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
            setMyRef={setMyRef}
            onRowClick={props.onRowClick}
            selectedRowIds={selectedRowIds}
            onSelectRow={selectRow}
            allSelected={allSelected}
            data={data}
          />
        </TableWrapper>
        {noResultsConent}
      </div>
    </div>
  );
};

export default Table;
