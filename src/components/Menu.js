import React from 'react';
import Select from 'react-select';

const baseURL = 'https://www.potterapi.com/v1/';
const mainURL = 'characters/';
const extraURL = 'spells/';
const keyURL =
  '?key=$2a$10$dSooM7l5aj6uLNFOmwf/SObKzKhMgFSrbie2BUTrRmz5hw/jj6Wme';

const optionsSelect = [
  { value: 'professors', label: 'Professors' },
  { value: 'students', label: 'Students' },
  { value: 'other', label: 'Others' },
  { value: 'spells', label: 'Spells' },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#5a3441' : '#9c4752',
  }),
};

export const Menu = ({ setSwitch, getData }) => {
  const charactersURL = `${baseURL}${mainURL}${keyURL}`;
  const spellsURL = `${baseURL}${extraURL}${keyURL}`;

  const change = (type) => {
    setSwitch(true);
    if (type !== 'spells') getData(charactersURL, type);
    else getData(spellsURL, type);
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
