import React, { useState } from 'react';

const urlAvatar = 'https://randomuser.me/api/';

const sortTable = (data, type, setList) => {
  const newDat = [...data]
    .map((el) => {
      return el[type];
    })
    .sort()
    .map((characters) => {
      return [...data].filter((charact) => charact[type] === characters);
    })
    .map((ch) => ch[0]);
  console.log(newDat);
  setList(newDat);
};

export const Table = ({
  getAvatar,
  displaySwitch,
  list,
  setSwitch,
  getProfile,
}) => {
  const [tableList, setTableList] = useState(list);

  return (
    <div className={`Table ${!displaySwitch ? 'hidden' : ''}`}>
      <div className="tableBox">
        <div className="tableHead">
          <div className="tableIndex">#</div>
          <div className="tableName">
            <button onClick={() => sortTable(list, 'name', setTableList)}>
              Name ↓
            </button>
          </div>
          <div className="tableSpecies">
            <button onClick={() => sortTable(list, 'species', setTableList)}>
              Species ↓
            </button>
          </div>
          <div className="tableHouse">
            <button onClick={() => sortTable(list, 'house', setTableList)}>
              House ↓
            </button>
          </div>
        </div>
        {[...tableList].map((el, index) => {
          return (
            <div
              key={index}
              className="tableContent"
              onClick={() => {
                setSwitch(false);
                getAvatar(urlAvatar, 'avatar');
                getProfile(el);
              }}
            >
              <div className="tableIndex">{index}</div>
              <div className="tableName">{el.name || '---'}</div>
              <div className="tableSpecies">{el.species || '---'}</div>
              <div className="tableHouse">{el.house || '---'}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* <button
            
          >
            show profile
          </button> */
