/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import { createFilter } from 'utils/filter';
import { createSorter } from 'utils/sort';
import TableWrapper from './TableWrapper';
import SearchWrapper from './SearchWrapper';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const Table = ({ columns, data, onRowClick, onSelectRow }) => {
  let noResultsConent;
  let tableVirtualizerRef;
  let selectedRowsOriginal = [];
  const sortOrderState = {};
  const [selectedRowIds, setSelectedRowIds] = useState({});
  const [sortOrder, setSortOrder] = useState(sortOrderState);
  const [filteredData, setFilteredData] = useState(data);
  const [allSelected, setAllSelected] = useState(null);

  useEffect(() => {
    setFilteredData(data);
    refreshTableView();
  }, [data]);

  const getRowIsSelected = id => selectedRowIds[id];

  const refreshTableView = () => {
    if (tableVirtualizerRef) {
      tableVirtualizerRef.forceUpdateGrid();
    }
  };
  const updateSelectedRowsOriginal = () => {
    const originalRowsData = [];
    filteredData.forEach(row => {
      const isSelected = getRowIsSelected(row.id);
      if (isSelected) {
        originalRowsData.push(row);
      }
    });
    selectedRowsOriginal = originalRowsData;
  };

  const selectRowHandler = (row, all, status) => {
    const selectedRowsMap = {};
    if (all) {
      filteredData.forEach(row => {
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
    updateSelectedRowsOriginal(selectedRowIds);
    onSelectRow(selectedRowIds, selectedRowsOriginal);
    refreshTableView();
  };

  const setVirtualizerRef = ref => {
    tableVirtualizerRef = ref;
  };

  const onChangeQuery = $event => {
    const searchQuery = $event.target.value;
    const filteredData = data.filter(createFilter(...['title', searchQuery]));
    setFilteredData(filteredData);
    refreshTableView();
  };

  const onChangeSortField = field => {
    const order = sortOrder[field.key] === 'ASC' ? 'DESC' : 'ASC';
    const sortOrderState = { [field.key]: order };
    const filteredData = data.sort(createSorter(...[field.key, order]));
    setSortOrder(Object.assign({}, sortOrderState));
    setFilteredData(filteredData);
    refreshTableView();
  };

  if (!data.length) {
    noResultsConent = (
      <p className="no-results" key="only">
        No Data
      </p>
    );
  }

  if (data.length && !filteredData.length) {
    noResultsConent = (
      <p className="no-results" key="only">
        No Results for the current filter
      </p>
    );
  }

  return (
    <div className="container">
      <TableWrapper>
        <SearchWrapper>
          <Button handleRoute={() => {}}>Filter</Button>
          <Input
            type="text"
            placeholder="Search here"
            className="search"
            onChange={onChangeQuery}
          />
        </SearchWrapper>
        <p className="showing-text">
          Showing <strong>{filteredData.length}</strong>
        </p>
        <TableHead
          columns={columns}
          onSelectAll={selectRowHandler}
          allSelected={allSelected}
          sortOrder={sortOrder}
          onChangeSortField={onChangeSortField}
          selectedRowsOriginal={selectedRowsOriginal}
        />
        <TableBody
          columns={columns}
          setVirtualizerRef={setVirtualizerRef}
          onRowClick={onRowClick}
          selectedRowIds={selectedRowIds}
          onSelectRow={selectRowHandler}
          data={filteredData}
        />
      </TableWrapper>
      {noResultsConent}
    </div>
  );
};

export default Table;
