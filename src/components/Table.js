import React, { useState } from 'react';
import { TableContent } from './TableContent';

const sortTableWord = (data, value, type) =>
  [...data].filter(
    (char) =>
      String(type ? char.spell : char.name).slice(0, String(value).length) ===
      String(value),
  );

export const Table = ({
  displaySwitch,
  list,
  getProfile,
  showProfile,
  getData,
  sortTable,
  type,
}) => {
  const [valueSearch, setValueSearch] = useState('');

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
            }}
          />
        </div>
        <div className="tableHead">
          <button onClick={() => sortTable(list, type ? 'spell' : 'name')}>
            {`${type ? 'Spell' : 'Name'} ↓`}
          </button>
          <button onClick={() => sortTable(list, type ? 'type' : 'species')}>
            {`${type ? 'Type' : 'Species'} ↓`}
          </button>
          <button onClick={() => sortTable(list, type ? 'effect' : 'house')}>
            {`${type ? 'Effect' : 'House'} ↓`}
          </button>
        </div>
        <TableContent
          list={sortTableWord(list, valueSearch, type)}
          showProfile={showProfile}
          getProfile={getProfile}
          getAvatar={getData}
          typeTable={type}
        />
      </div>
    </div>
  );
};
