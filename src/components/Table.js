import React from 'react';

const urlAvatar = 'https://randomuser.me/api/';

export const Table = ({ setSwitch, displaySwitch, getAvatar }) => {
  return (
    <div className={`Table ${!displaySwitch ? 'hidden' : ''}`}>
      <div className="tableBox">
        <div className="tableHead">
          <div className="tableIndex">#</div>
          <div className="tableName">Name</div>
          <div className="tableSpecies">Species</div>
          <div className="tableHouse">House</div>
        </div>
        <div className="tableContent">
          <button
            onClick={() => {
              setSwitch(false);
              getAvatar(urlAvatar, 'avatar');
            }}
          >
            show profile
          </button>
        </div>
      </div>
    </div>
  );
};
