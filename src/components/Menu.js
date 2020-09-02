import React from 'react';
export const Menu = ({ getDateReq }) => {
  return (
    <div className="Menu">
      <div className="buttonMenu">
        <button onClick={() => getDateReq('students')}>Students</button>
        <button onClick={() => getDateReq('professors')}>Professors</button>
        <button onClick={() => getDateReq('other')}>Other</button>
      </div>
    </div>
  );
};
