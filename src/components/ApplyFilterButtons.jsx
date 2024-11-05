import React, { useCallback, useContext } from 'react';
import Button from './Button';
import { AuthContext } from '../providers/AuthProvider';

const ApplyFilterButtons = ({
  bedroomsSelected,
  closeAllDropdowns,
  setValue,
  setSelectedValues,
}) => {
  const {
    handlebedrooms,
    handlePrice,
    pricefilter,
    setpricefilter,
    setBedroomsSelected,
    handleSearchvalue,
  } = useContext(AuthContext);

  const handleFilterButton = useCallback(() => {
    handlebedrooms(bedroomsSelected);
    handlePrice(pricefilter);
    // handleSearchvalue({ propertyType: '' });
    closeAllDropdowns();
  }, [
    bedroomsSelected,
    pricefilter,
    handlebedrooms,
    handlePrice,
    closeAllDropdowns,
  ]);

  const clearClickEvent = useCallback(() => {
    closeAllDropdowns();
    setBedroomsSelected('');
    handlebedrooms('');
    setpricefilter({ minPrice: '', maxPrice: '' });
    setSelectedValues([]);
    setValue('Property type');
    handleSearchvalue({ propertyType: '' });

    console.log('Filters cleared');
  }, [
    closeAllDropdowns,
    setBedroomsSelected,
    handlebedrooms,
    setpricefilter,
    setValue,
  ]);

  return (
    <div className='text-dark flex justify-between items-center p-5 text-sm'>
      {/* Button to clear filters */}
      <h6 onClick={clearClickEvent} className='cursor-pointer'>
        Clear
      </h6>

      {/* Button to apply filters */}
      <Button
        clickEvent={handleFilterButton}
        extraClasses='bg-dark hover:bg-dark/90 text-white'
      >
        Apply Filter
      </Button>
    </div>
  );
};

export default ApplyFilterButtons;
