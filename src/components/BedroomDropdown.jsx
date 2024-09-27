import { Divider } from 'antd';
import React from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import ApplyFilterButtons from './ApplyFilterButtons';
import { useUserContext } from '../providers/AuthProvider';

const BedroomDropdown = ({
  footer3Handler,
  footer3Open,
  bedRoomSizes,
  bedroomsSelected,
  setBedroomsSelected,
  border,
  closeAllDropdowns,
}) => {
  return (
    <div className={`relative ${border && 'bg-white w-fit p-2 rounded-md'}`}>
      <h6
        onClick={footer3Handler}
        className='flex items-center gap-1 cursor-pointer'
      >
        {bedroomsSelected ? bedroomsSelected : 'Bedrooms'}
        {footer3Open ? <BiChevronUp /> : <BiChevronDown />}
      </h6>
      {footer3Open && (
        <div
          className={`absolute shadow-md rounded-lg ${
            border ? 'top-12 shadow-lg' : 'top-7'
          } right-0 bg-white w-80`}
        >
          <div className='p-3'>
            <h1 className='text-dark text-sm'>Bedroom</h1>
            <div className='flex flex-wrap gap-5 mt-5 text-dark'>
              {bedRoomSizes.map((option) => (
                <div
                  key={option}
                  className={`px-4 py-1 border rounded-lg cursor-pointer ${
                    bedroomsSelected === option && 'bg-dark text-white'
                  } border border-dark`}
                  onClick={() => {
                    setBedroomsSelected(option);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          <Divider />
          <ApplyFilterButtons
            setBedroomsSelected={setBedroomsSelected}
            bedroomsSelected={bedroomsSelected}
            closeAllDropdowns={closeAllDropdowns}
          />
        </div>
      )}
    </div>
  );
};

export default BedroomDropdown;
