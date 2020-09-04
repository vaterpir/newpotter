import React from 'react';

export const TableContent = ({ list, sorts }) => {
  return (
    <div className="TableContent">
      {[...list].map((row, index) => (
        <div key={index}>
          <div>{row.name || '---'}</div>
          <div>{row.species || '---'}</div>
          <div>{row.house || '---'}</div>
        </div>
      ))}
    </div>
  );
};
