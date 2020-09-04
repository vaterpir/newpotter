import React, { useState } from 'react';
import { Table } from './Table';
import { Menu } from './Menu';
import { Profile } from './Profile';

import '../styles/App.css';
const xhr = new XMLHttpRequest();

const selectTable = (data) =>
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

export const App = () => {
  const [displaySwitch, setDisplaySwitch] = useState(true);
  const [list, setList] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [dataProfile, setDataProfile] = useState({});
  const [valueSearch, setValueSearch] = useState('');
  const [typeTable, setTypeTable] = useState('');

  const sortSearch = (data, type, value) => {
    if (value === '') {
      return data;
    } else {
      const newDat = [...data].filter(
        (charact) =>
          charact[type].toString().slice(0, String(value).length) ===
          String(value),
      );
      console.log(newDat);
      return newDat;
    }
  };

  const sortTable = (data, type, value, extra) => {
    if (!extra) {
      const newDat = [...data]
        .sort((prev, next) =>
          String(prev[type]) < String(next[type])
            ? -1
            : String(prev[type]) < String(next[type])
            ? 1
            : 0,
        )
        .map((pers) => {
          pers.species = pers.species
            .split(' ')
            .map((spl) =>
              [...String(spl)]
                .map((bukva, index) =>
                  index < 8 ? bukva : index === 8 ? '..' : '',
                )
                .join(''),
            )
            .toString()
            .split(',')
            .join(' ');
          return pers;
        });
      setList(newDat);
      return newDat;
    }
  };

  const getData = (url, type, extra, value, option) => {
    setTypeTable(type);

    if (type === 'avatar') setAvatar('/src/img/avatar.jpg');
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.responseText);
        if (option === 'search') {
          const newData = sortSearch(data, extra, value);
          setList(newData);
        } else {
          if (type === 'avatar') setAvatar(data.results[0].picture.large);
          else {
            const newData = selectTable(data)[type];
            setList(newData);
          }
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
          displaySwitch={displaySwitch}
          list={list}
          showProfile={setDisplaySwitch}
          getProfile={setDataProfile}
          getData={getData}
          sortTable={sortTable}
          valueSearch={valueSearch}
          setValueSearch={setValueSearch}
          type={typeTable}
        />

        <Profile
          displayProfile={displaySwitch}
          setSwitch={setDisplaySwitch}
          avatar={avatar}
          dataProfile={dataProfile}
        />
      </div>
    </div>
  );
};
