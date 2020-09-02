import React, { useState } from 'react';
import Select from 'react-select';
import { TableInfo } from './TableInfo';
import { Menu } from './Menu';
import { Profil } from './Profil';

import '../styles/App.css';
const xhr = new XMLHttpRequest();
const profileURL = 'https://randomuser.me/api/';
const baseURL = 'https://www.potterapi.com/v1/';
const keyURL =
  '?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';
const mainURL = 'characters/';

const state = {
  newData: {},
};

export const App = () => {
  const [displaySwitch, setDisplaySwitch] = useState(true);
  const [data, setData] = useState([]);
  const [avatar, setAvatar] = useState('');
  let x = 2;

  const getDateReq = () => {
    setDisplaySwitch(true);
    xhr.open('GET', `${baseURL}${mainURL}${keyURL}`, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        const datareqest = JSON.parse(xhr.responseText);
        console.log(datareqest);
      } else {
        console.log('error');
      }
    };
    xhr.send();
  };

  const getAvatar = () => {
    const url = 'https://randomuser.me/api/';
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.responseText);
        setAvatar(data.results[0].picture.large);
      } else {
        console.log('error');
      }
    };
    xhr.send();
  };

  const options = [
    { value: 'Professor', label: 'Professor' },
    { value: 'Student', label: 'Student' },
    { value: 'Other', label: 'Other' },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'red' : 'blue',
    }),
  };
  return (
    <div className="App">
      <div className="content">
        <div className="Menu">
          <div className="logoMenu">Harry Potter Characters:</div>
          <div>
            <Select
              defaultValue={options[0]}
              options={options}
              styles={customStyles}
              onChange={() => setDisplaySwitch(true)}
            />
          </div>
        </div>
        <div className={`Table ${!displaySwitch ? 'hidden' : ''}`}>
          <button
            onClick={() => {
              setDisplaySwitch(false);
              getAvatar();
            }}
          >
            show profile
          </button>
        </div>

        <div
          className={`Profile ${displaySwitch ? 'hidden' : ''}`}
          onClick={(event) => setDisplaySwitch(true)}
          id="hiddenProfileOver"
        >
          <div
            className="profileBox"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="headProfile">
              <button onClick={() => setDisplaySwitch(true)}>X</button>
            </div>

            <div className="contentProfile">
              <div className="avatarBox">
                <div className="avatar">
                  <img src={avatar}></img>
                </div>
                <div className="nameProfile">Name</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* const sortCharacters = (data) =>
  [...data].reduce(
    (acc, el, i) => {
      const role = [...String(el.role)].slice(0, 9).join('');
      role === 'Professor'
        ? (acc.professors = [...acc.professors, data[i]])
        : el.role !== 'student'
        ? (acc.other = [...acc.other, data[i]])
        : (acc.students = [...acc.students, data[i]]);
      return acc;
    },
    {
      students: [],
      professors: [],
      other: [],
    },
  ); 
  
  
  
  
const CreateList = (el, index, setDisplay, display) => {
  return (
    <div key={index}>
      <button className="buttonList" onClick={() => setDisplay(!display)}>
        <div>{index + 1}</div>
        <div>{el.name || '---'}</div>
        <div>{el.house || '---'}</div>
        <div>{el.bloodStatus || '---'}</div>
      </button>
    </div>
  );
};

  
  */
