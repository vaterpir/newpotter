import React, { useState } from 'react';
import '../styles/App.css';
const xhr = new XMLHttpRequest();

const baseURL = 'https://www.potterapi.com/v1/';
const keyURL =
  '?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';
const mainURL = 'characters/';

const sortData = (data) =>
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

const createInfo = (data, optons) => {
  return (
    <div className="list">
      {[...data[optons]].map((el, index) => (
        <button key={index} className="buttonList">
          <div>{index + 1}</div>
          <div>{el.name || '---'}</div>
          <div>{el.house || '---'}</div>
          <div>{el.bloodStatus || '---'}</div>
        </button>
      ))}
    </div>
  );
};

export const App = () => {
  const [getdata, setData] = useState('');
  const [displayInfo, setDisplayInfo] = useState('');

  const getDateReq = (optons) => {
    console.log('GET');
    xhr.open('GET', `${baseURL}${mainURL}${keyURL}`, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.responseText);
        state.newData = sortData(data);
        const newComonent = createInfo(state.newData, optons);
        setDisplayInfo(newComonent);
        console.log(state.newData);
        setData(state.newData);
      } else {
        console.log('error');
      }
    };
    xhr.send();
  };

  return (
    <div className="App">
      <div className="content">
        <div className="headerMenu">
          <div className="buttonMenu">
            <button onClick={() => getDateReq('students')}>Students</button>
            <button onClick={() => getDateReq('professors')}>Professors</button>
            <button onClick={() => getDateReq('other')}>Other</button>
          </div>
        </div>
        <div className="main">
          <div className="mainBox">
            <div className="info">{displayInfo}</div>
          </div>
          <div className="profil">123</div>
        </div>
      </div>
    </div>
  );
};
