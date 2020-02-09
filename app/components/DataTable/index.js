import styled from 'styled-components';
import React from 'react';
import TableWrapper from './TableWrapper';
import TableHead from '../TableHead';
import TableBody from '../TableBody';

const Table = props => {
  const { columns, data } = props;
  let noResultsConent;
  if (!data.length) {
    noResultsConent = (
      <p className="no-results" key="only">
        No Results
      </p>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <TableWrapper>
          <TableHead columns={columns} />
          <TableBody
            columns={columns}
            onRowClick={props.onRowClick}
            onSelectRow={props.onSelectRow}
            data={data}
          />
        </TableWrapper>
        {noResultsConent}
      </div>
    </div>
  );
};

export default Table;
