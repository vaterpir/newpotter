import React, { useState } from 'react';
import { TableContent } from './TableContent';

const baseURL = 'https://www.potterapi.com/v1/';
const mainURL = 'characters/';
const keyURL =
  '?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';
const fullURL = `${baseURL}${mainURL}${keyURL}`;

export const Table = ({
  displaySwitch,
  list,
  sortTable,
  getProfile,
  showProfile,
  getData,
  valueSearch,
  setValueSearch,
  type
}) => {
  return (
    <div className={`Table ${!displaySwitch ? 'hidden' : ''}`}>
      <div className="tableBox">
        <div className="tableSearch">
          <input
            type="text"
            placeholder="enter a name ..."
            value={valueSearch}
            onChange={(event) => {
              setValueSearch(event.target.value);
              getData(fullURL, type, 'name', valueSearch, 'search');
            }}
          />
        </div>
        <div className="tableHead">
          <button onClick={() => sortTable(list, 'name')}>Name ↓</button>
          <button onClick={() => sortTable(list, 'species')}>Species ↓</button>
          <button onClick={() => sortTable(list, 'house')}>House ↓</button>
        </div>
        <TableContent
          list={list}
          showProfile={showProfile}
          getProfile={getProfile}
          getAvatar={getData}
        />
      </div>
    </div>
  );
};
