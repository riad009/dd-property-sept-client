import React from 'react';
import { GiBathtub, GiBed } from 'react-icons/gi';
import { RiCommunityFill } from 'react-icons/ri';

import { BiCheck } from 'react-icons/bi';

const PropertyCard = ({ property, setSelectedProperty }) => {
  const {
    coverImage,
    address,
    floorSize,
    size,
    bedrooms,
    bathrooms,
    propertyType,
    amenities,
    propertyName,
    province,
    city,
  } = property;

  return (
    <div
      onClick={() => setSelectedProperty(property)}
      className='cursor-pointer'
    >
      <div className='flex gap-3 bg-white w-full shadow-md rounded-md'>
        <img
          src={coverImage[0]}
          alt='property_cover'
          className='rounded-t-lg w-[250px] h-[200px] object-cover'
        />
        <div className='p-2'>
          <h1 className='mt-3 font-semibold text-xl'>{propertyName}</h1>
          <h1 className='text-sm my-1'>
            {province}, {city}, {address}
          </h1>

          <h1 className='text-sm my-1'>Property type: {propertyType}</h1>
          {propertyType !== 'land' && (
            <div className='flex gap-5 my-3'>
              <div>
                <p className='flex items-center gap-2 text-sm text-dark font-[500]'>
                  <GiBed className='text-xl' />
                  {bedrooms}
                </p>
              </div>
              <div>
                <p className='flex items-center gap-2 text-sm text-dark font-[500]'>
                  <GiBathtub className='text-xl' /> {bathrooms}
                </p>
              </div>
              <div>
                <p className='flex items-center gap-2 text-sm text-dark font-[500]'>
                  <RiCommunityFill className='text-xl' /> {floorSize || size}{' '}
                  sqm
                </p>
              </div>
            </div>
          )}
          {Array.isArray(amenities)
            ? amenities.map((am, i) => (
                <p
                  key={i}
                  className='inline-flex items-center gap-2 border-b border-gray-100'
                >
                  <BiCheck />
                  {am}
                </p>
              ))
            : amenities && (
                <p className='inline-flex items-center gap-2 border-b border-gray-100'>
                  <BiCheck />
                  {amenities}
                </p>
              )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
