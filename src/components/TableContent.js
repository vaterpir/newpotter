import React from 'react';

const urlAvatar = 'https://randomuser.me/api/';

export const TableContent = ({ list, getProfile, getAvatar, showProfile }) => {
  return (
    <div className="TableContent">
      {[...list].map((character, index) => (
        <div
          key={index}
          onClick={() => {
            getProfile(character);
            showProfile(false);
            getAvatar(urlAvatar, 'avatar');
          }}
        >
          <div>{character.name || '---'}</div>
          <div>{character.species || '---'}</div>
          <div>{character.house || '---'}</div>
        </div>
      ))}
    </div>
  );
};
