import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import ApplyFilterButtons from './ApplyFilterButtons';

const PropertyTypeHeader = () => (
  <div className='p-3'>
    <h1 className='text-dark'>Property Type</h1>
  </div>
);

const FooterItem = ({ item, selectedValues, handleSelection }) => (
  <div key={item.key}>
    <label
      className={`p-3 w-full flex items-center mb-2 cursor-pointer ${
        selectedValues.includes(item.label) && 'bg-dark2'
      }`}
    >
      <input
        type='radio'
        value={item.label}
        checked={selectedValues.includes(item.label)}
        onChange={() => handleSelection(item.label)}
        className='form-radio h-5 w-5 text-blue-600'
      />
      <span
        className={`ml-2 ${
          selectedValues.includes(item.label) ? 'text-white' : 'text-dark'
        }`}
      >
        {item.label}
      </span>
    </label>
  </div>
);

const AllResidentialDropdown = ({
  footer1Handler,
  footer1Open,
  footer1Items,
  border,
  hideFooter,
  setValue,
  closeAllDropdowns,
}) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelection = (label) => {
    const newSelectedValues = selectedValues.includes(label)
      ? selectedValues.filter((item) => item !== label)
      : [...selectedValues, label];
    setSelectedValues(newSelectedValues);
    setValue(newSelectedValues.join(','));
  };

  return (
    <div className={`relative ${border && 'bg-white w-fit p-2 rounded-md'}`}>
      <h6
        onClick={footer1Handler}
        className={`flex items-center gap-1 cursor-pointer ${
          hideFooter
            ? 'rounded-[8px] border border-[lightgray] h-[40px] pl-2'
            : ''
        }`}
      >
        {selectedValues.join(', ') || 'Property Type'}
        {footer1Open ? <BiChevronUp /> : <BiChevronDown />}
      </h6>
      {footer1Open && (
        <div
          className={`absolute shadow-md rounded-lg ${
            border ? 'top-12 shadow-lg' : 'top-7'
          } left-0 bg-white`}
        >
          <PropertyTypeHeader />
          <div className='overflow-scroll h-52 overflow-x-hidden w-80 bg-dark2 bg-opacity-5'>
            {footer1Items.map((item) => (
              <FooterItem
                key={item.key}
                item={item}
                selectedValues={selectedValues}
                handleSelection={handleSelection}
              />
            ))}
          </div>
          {!hideFooter && (
            <ApplyFilterButtons
              closeAllDropdowns={closeAllDropdowns}
              setValue={setValue}
              setSelectedValues={setSelectedValues}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AllResidentialDropdown;
