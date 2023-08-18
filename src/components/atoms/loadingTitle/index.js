import React from 'react';

const LoadingTitle = ({ width = 70, height = 30 }) => {
  return (
    <div className="text-loading shimmer" style={{ width, height, marginBottom: 20 }} />
  );
};

export default LoadingTitle;
