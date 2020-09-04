import React from 'react';

const rowDesc = (data) => {
  const component = [];
  for (const key in data) {
    if (key !== 'name' && key !== 'role' && key !== '_id' && key !== '__v')
      component.push(key);
  }
  return component.map((key, index) => (
    <div key={index + 'pr'}>
      <div>{key}: </div>
      <div>
        {String(data[key]) === 'true'
          ? 'yes'
          : String(data[key]) === 'false'
          ? 'no'
          : String(data[key])}
      </div>
    </div>
  ));
};

export const DescriptProfile = ({ dataProfile }) => {
  return <div className="descriptProfile">{rowDesc(dataProfile)}</div>;
};
