import React from 'react';
export const Profil = ({ display, setDisplay }) => {
  return (
    <div className="Profil">
      <button onClick={() => setDisplay(!display)}>X</button>
    </div>
  );
};
