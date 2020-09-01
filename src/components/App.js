import React, { useState } from 'react';
import '../styles/App.css';
const xhr = new XMLHttpRequest();

const baseURL = 'https://www.potterapi.com/v1/';
const keyURL =
  '?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';
const mainURL = 'characters/';

/* const students = [];
const professors = [];
const other = []; */

const sortData = (data) =>
  [...data].reduce(
    (acc, el, i) => {
      const role = [...String(el.role)].slice(0, 9).join('');
      if (role === 'Professor') acc.professors = [...acc.professors, data[i]];
      else if (el.role !== 'student') acc.other = [...acc.other, data[i]];
      else acc.students = [...acc.students, data[i]];
      return acc;
    },
    {
      students: [],
      professors: [],
      other: [],
    },
  );

xhr.open('GET', `${baseURL}${mainURL}${keyURL}`, false);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    const data = JSON.parse(xhr.responseText);
    const newData = sortData(data);
    console.log(newData);
  } else {
    console.log('error');
  }
};
xhr.send();

export const App = () => {
  return (
    <div className="App">
      <div className="content">123</div>
    </div>
  );
};
