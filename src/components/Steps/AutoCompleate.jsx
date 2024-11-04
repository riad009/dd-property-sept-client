import React, { useState, useEffect } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Input } from 'antd';
import Loader from '../Loader';
import useGoogleMapsLoader from '../../utils/useGoogleMap';

const AutocompleteInput = ({
  name,
  onPlaceChanged,
  placeholder,
  prefilledValue,
}) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [inputValue, setInputValue] = useState(prefilledValue || '');

  const { isLoaded } = useGoogleMapsLoader();
  useEffect(() => {
    if (prefilledValue) {
      setInputValue(prefilledValue);
    }
  }, [prefilledValue]);

  const handleOnLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      console.log(place);
      if (place.geometry) {
        const newLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setInputValue(`${place.formatted_address}`);
        onPlaceChanged(name, place, newLocation);
      }
    }
  };

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <Autocomplete onLoad={handleOnLoad} onPlaceChanged={handlePlaceChanged}>
      <Input
        size='large'
        placeholder={placeholder}
        name={name}
        autoComplete='off'
        role='presentation'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // readOnly={true}
      />
    </Autocomplete>
  );
};

export default AutocompleteInput;
