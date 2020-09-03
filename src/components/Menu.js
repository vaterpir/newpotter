import React from 'react';
import Select from 'react-select';

const baseURL = 'https://www.potterapi.com/v1/';
const mainURL = 'characters/';
const keyURL =
  '?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';

const optionsSelect = [
  { value: 'Professors', label: 'Professors' },
  { value: 'Students', label: 'Students' },
  { value: 'Others', label: 'Others' },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#5a3441' : '#9c4752',
  }),
};

export const Menu = ({ setSwitch, getData }) => {
  const fullURL = `${baseURL}${mainURL}${keyURL}`;
  const change = (type) => {
    setSwitch(true);
    getData(fullURL, type);
  };
  return (
    <div className="Menu">
      <div className="logoMenu">Hogwarts is:</div>
      <div>
        <Select
          defaultValue={optionsSelect[0]}
          options={optionsSelect}
          styles={customStyles}
          onChange={(event) => change(event.value)}
        />
      </div>
    </div>
  );
};
