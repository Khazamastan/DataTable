/* eslint-disable react/prop-types */
import React from 'react';
import ContentLoader from 'react-content-loader';

const TRLoadingPlaceholder = ({ width }) => (
  <ContentLoader
    height={60}
    width={width}
    speed={1}
    viewBox={`0 0 ${width} 60`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="27" cy="27" r="18" />
    <rect x="53" y="14" rx="3" ry="3" width={width / 2} height="13" />
    <rect x="53" y="30" rx="3" ry="3" width="10" height="10" />
    <rect x="67" y="30" rx="3" ry="3" width="140" height="10" />
    <rect x="0" y="53" rx="0" ry="0" width={width} height="1" />
    <rect x="219" y="146" rx="0" ry="0" width="0" height="0" />
  </ContentLoader>
);

export default TRLoadingPlaceholder;
