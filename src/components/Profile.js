import React from 'react';

const profileURL = 'https://randomuser.me/api/';

export const Profile = ({ displayProfile, setSwitch, avatar }) => {

  
  return (
    <div
      className={`Profile ${displayProfile ? 'hidden' : ''}`}
      onClick={() => setSwitch(true)}
      id="hiddenProfileOver"
    >
      <div className="profileBox" onClick={(event) => event.stopPropagation()}>
        <div className="headProfile">
          <button onClick={() => setSwitch(true)}>X</button>
        </div>

        <div className="contentProfile">
          <div className="avatarBox">
            <div className="avatar">
              <img src={!displayProfile ? avatar : '/src/img/avatar.jpg'} />
            </div>
            <div className="mainProfile">
              <div>
                <div>Name:</div>
                <div>Hannah Abbott</div>
              </div>
              <div>
                <div>Role:</div>
                <div>student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
