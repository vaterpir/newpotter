import React from 'react';
import { DescriptProfile } from './DescriptProfile';

const profileURL = 'https://randomuser.me/api/';

export const Profile = ({ displayProfile, setSwitch, avatar, dataProfile }) => {
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
          <div className="contentBoxProfile">
            <div className="avatar">
              <img src={!displayProfile ? avatar : '/src/img/avatar.jpg'} />
            </div>
            <div className="mainProfile">
              <div className="mainHeadProfile">
                <div>Name:</div>
                <div>{dataProfile.name || '---'}</div>
              </div>
              <div className="mainHeadProfile">
                <div>Role:</div>
                <div>{dataProfile.role || '---'}</div>
              </div>
              <div className="headDesc">Description</div>

              <DescriptProfile dataProfile={dataProfile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
