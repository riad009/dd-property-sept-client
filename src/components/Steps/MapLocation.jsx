import React, { useCallback } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { Spin } from 'antd';
import useGoogleMapsLoader from '../../utils/useGoogleMap';

const MapLocation = ({ location, setMap, onPlaceChanged, setDraggedData }) => {
  const { isLoaded, loadError } = useGoogleMapsLoader();

  const onMapLoad = useCallback(
    (map) => {
      setMap(map);
    },
    [setMap]
  );

  const onMarkerDragEnd = useCallback((event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    // setLocation(newLocation);

    // Initialize the Geocoder
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ location: newLocation }, (results, status) => {
      if (status === 'OK' && results[1]) {
        const addressComponents = results[1].address_components;

        let areaName = '';
        let province = '';
        let city = '';
        let country = '';

        // Extract the place name, area name, province, city, and country from the address components
        addressComponents.forEach((component) => {
          if (
            component.types.includes('sublocality') ||
            component.types.includes('neighborhood')
          ) {
            areaName = component.long_name;
          }
          if (component.types.includes('administrative_area_level_1')) {
            province = component.long_name;
          }
          if (
            component.types.includes('locality') ||
            component.types.includes('postal_town')
          ) {
            city = component.long_name;
          }
          if (component.types.includes('country')) {
            country = component.long_name;
          }
        });

        const formattedAddress = results[1].formatted_address;

        console.log({ province, city, formattedAddress }, results[1]);

        setDraggedData({
          province,
          city,
          location: formattedAddress,
          ...newLocation,
        });

        onPlaceChanged('province', { name: province }, newLocation);
        onPlaceChanged('city', { name: city }, newLocation);
        onPlaceChanged('location', { name: formattedAddress }, newLocation);
      } else {
        console.error('Geocoder failed due to: ' + status);
      }
    });
  }, []);
  if (loadError) return <div>Error loading maps</div>;

  return (
    <div className='w-full h-full flex items-center justify-center'>
      {!isLoaded ? (
        <Spin size='large' />
      ) : (
        <div className='w-full h-96 md:h-128 lg:h-96'>
          <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            center={location}
            zoom={15}
            onLoad={onMapLoad}
          >
            <MarkerF
              position={location}
              draggable={setDraggedData ? true : false}
              onDragEnd={onMarkerDragEnd}
              options={{
                icon: {
                  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                  scaledSize: {
                    width: 40,
                    height: 40,
                  },
                },
              }}
            />
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default MapLocation;
