import React, { useState } from 'react';
import { TableInfo } from './TableInfo';
import { Menu } from './Menu';
import { Profil } from './Profil';

import '../styles/App.css';
const xhr = new XMLHttpRequest();

const baseURL = 'https://www.potterapi.com/v1/';
const keyURL =
  '?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';
const mainURL = 'characters/';

const sortCharacters = (data) =>
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

const state = {
  newData: {},
};

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
const CreateInfo = (data, optons, setDisplay, display) => {
  return (
    <div className="list">
      
      {[...data[optons]].map((el, index) =>
        CreateList(el, index, setDisplay, display),
      )}
    </div>
  );
};

export const App = () => {
  const [displayInfo, setDisplayInfo] = useState('');
  const [display, setDisplay] = useState(false);

  const getDateReq = (optons) => {
    console.log('GET');
    xhr.open('GET', `${baseURL}${mainURL}${keyURL}`, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.responseText);
        state.newData = sortCharacters(data);
        const newComonent = CreateInfo(
          state.newData,
          optons,
          setDisplay,
          display,
        );
        setDisplayInfo(newComonent);
        console.log(state.newData);
      } else {
        console.log('error');
      }
    };
    xhr.send();
  };
  return (
    <div className="App">
      <div className="content">
        <div>
          <Menu getDateReq={getDateReq} />
        </div>
        <div>
          <div className={`${display ? 'hidden' : ''}`}>
            <TableInfo info={displayInfo} setDisplay={setDisplay} />
          </div>
          <div className={`${!display ? 'hidden' : ''}`}>
            <Profil display={display} setDisplay={setDisplay} />
          </div>
        </div>
      </div>
    </div>
  );
};
