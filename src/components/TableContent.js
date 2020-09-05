import React from 'react';

const urlAvatar = 'https://randomuser.me/api/';

export const TableContent = ({
  list,
  getProfile,
  getAvatar,
  showProfile,
  typeTable,
}) => {
  return (
    <div className="TableContent">
      {typeTable === 'spells'
        ? [...list].map((character, index) => (
            <div key={index}>
              <div>{character.spell || '---'}</div>
              <div>{character.type || '---'}</div>
              <div>{character.effect || '---'}</div>
            </div>
          ))
        : [...list].map((character, index) => (
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
