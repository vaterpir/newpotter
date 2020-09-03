import React from 'react';

const urlAvatar = 'https://randomuser.me/api/';

export const Table = ({ setSwitch, displaySwitch, getAvatar }) => {
  return (
    <div className={`Table ${!displaySwitch ? 'hidden' : ''}`}>
      <button
        onClick={() => {
          setSwitch(false);
          getAvatar(urlAvatar, 'avatar');
        }}
      >
        show profile
      </button>
    </div>
  );
};
