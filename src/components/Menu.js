import React from 'react';
import Select from 'react-select';

const optionsSelect = [
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

export const Menu = ({ setSwitch }) => {
  return (
    <div className="Menu">
      <div className="logoMenu">Harry Potter Characters:</div>
      <div>
        <Select
          defaultValue={optionsSelect[0]}
          options={optionsSelect}
          styles={customStyles}
          onChange={() => setSwitch(true)}
        />
      </div>
    </div>
  );
};
