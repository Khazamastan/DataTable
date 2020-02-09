import styled from 'styled-components';
import React from 'react';

const TitleWrrapper = styled.p`
  span {
    font-weight: 500;
    color: #2196f3;
  }
  &:first-letter {
    text-transform: capitalize;
  }
`;

const ThumbnailCellWrarpper = styled.img`
  padding: 2px;
  max-height: 50px;
  border: 1px solid #ececec;
`;


const LinkCellWrarpper = styled.a`
    color: #2196f3;
    text-decoration: none;
    font-size: 12px;
`;

export const TitleCell = props => {
  const { column, value } = props;
  return (
    <TitleWrrapper>
      <span>{column && column != 'NULL' ? value : '-'}</span>
    </TitleWrrapper>
  );
};

export const ThumbnailCell = props => {
  const { column, value } = props;
  return <ThumbnailCellWrarpper className="img" src={value} />;
};


export const LinkCell = props => {
    const { column, value } = props;
    return <LinkCellWrarpper>{value}</LinkCellWrarpper>;
}