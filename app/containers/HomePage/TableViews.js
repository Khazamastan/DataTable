/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

const TitleWrrapper = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  span {
    font-weight: 500;
    color: ${props => props.theme.primaryColor};
  }
  &:first-letter {
    text-transform: capitalize;
  }
`;

const IMG_SIZE = 50;
const ThumbnailCellWrarpper = styled.img`
  padding: 2px;
  width: ${IMG_SIZE}px;
  height: ${IMG_SIZE}px;
  border: 1px solid ${props => props.theme.borderColor};
`;

const LinkCellWrarpper = styled.a`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const TitleCell = props => {
  const { column, value } = props;
  return (
    <TitleWrrapper>
      <span>{column && column !== 'NULL' ? value : '-'}</span>
    </TitleWrrapper>
  );
};

export const ThumbnailCell = props => {
  const { value } = props;
  return <ThumbnailCellWrarpper className="img" src={value} />;
};

export const LinkCell = props => {
  const { value } = props;
  return <LinkCellWrarpper>{value}</LinkCellWrarpper>;
};
