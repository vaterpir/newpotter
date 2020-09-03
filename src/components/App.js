import React, { useState } from 'react';
import { Table } from './Table';
import { Menu } from './Menu';
import { Profile } from './Profile';

import '../styles/App.css';
const xhr = new XMLHttpRequest();

export const App = () => {
  const [displaySwitch, setDisplaySwitch] = useState(true);
  const [data, setData] = useState([]);
  const [avatar, setAvatar] = useState('');

  const getData = (url, type) => {
    if (type === 'avatar') setAvatar('/src/img/avatar.jpg');
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.responseText);
        if (type === 'avatar') setAvatar(data.results[0].picture.large);
        else {
          console.log(data);
        }
      } else {
        console.log('error');
      }
    };
    xhr.send();
  };

  return (
    <div className="App">
      <div className="content">
        <Menu setSwitch={setDisplaySwitch} getData={getData} />

        <Table
          setSwitch={setDisplaySwitch}
          displaySwitch={displaySwitch}
          getAvatar={getData}
        />

        <Profile
          displayProfile={displaySwitch}
          setSwitch={setDisplaySwitch}
          avatar={avatar}
        />
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
