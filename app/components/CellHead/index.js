import React,  { useState }  from 'react';
import CellHeadWrapper, { CheckBoxViewWrapper } from './Wrapper';

const cellHeadView = (column, cell, columnKey, numeric, props) => {
  const { name, key, headerView } = column;
  const HeaderView = headerView;

  const [allSelected, setSelected] = useState(props.allSelected);

  const toggleAllSelection = () => {
    props.onSelectAll(null, 'all', !props.allSelected);
  };
  if (HeaderView) {
    return <HeaderView cell={cell} value={value} columnKey={columnKey} />;
  }
  switch (key) {
    case 'checkbox':
      return (
        <CheckBoxViewWrapper>
          <input
            checked={allSelected}
            value={allSelected}
            onChange={toggleAllSelection}
            type="checkbox"
          />{' '}
          <span>&#x25BE;</span>
        </CheckBoxViewWrapper>
      );
    default:
      return <p>{name}</p>;
  }
};

const CellHead = props => {
  const { singeHeader, cellsCount } = props;
  const { key, width, numeric, name } = singeHeader;
  const isCheckBox = key == 'checkbox';
  return (
    <CellHeadWrapper
      className={`${numeric ? 'numeric' : ''} ${isCheckBox ? 'checkbox' : ''}`}
      columnWidth={width}
      count={cellsCount}
    >
      {cellHeadView(singeHeader, key, name, numeric, props)}
    </CellHeadWrapper>
  );
};

export default CellHead;
