import React, { useState } from 'react';
import { TableContent } from './TableContent';

const urlAvatar = 'https://randomuser.me/api/';

export const Table = ({ displaySwitch, list, sortTable }) => {
  return (
    <div className={`Table ${!displaySwitch ? 'hidden' : ''}`}>
      <div className="tableBox">
        <div className="tableHead">
          <button onClick={() => sortTable(list, 'name')}>Name ↓</button>
          <button onClick={() => sortTable(list, 'species')}>Species ↓</button>
          <button onClick={() => sortTable(list, 'house')}>House ↓</button>
        </div>
        <TableContent list={list} />
      </div>
    </div>
  );
};

/* <button
            
          >
            show profile
          </button> */
