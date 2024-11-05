import { memo } from 'react';
import {
  GoogleMap,
  InfoWindowF,
  MarkerClustererF,
  MarkerF,
} from '@react-google-maps/api';

import { customDesign } from '../constants/footerItem';
import useGoogleMapsLoader from '../utils/useGoogleMap';
import { Link } from 'react-router-dom';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const MapCluster = memo(
  ({ properties, selectedProperty, setSelectedProperty }) => {
    const { isLoaded, loadError } = useGoogleMapsLoader();

    const handleMarkerClick = (property) => {
      setSelectedProperty(property);
    };

    const handleInfoWindowClose = () => {
      setSelectedProperty(null);
    };

    console.log({ properties, selectedProperty });
    if (!isLoaded)
      return (
        <div className={`container `} id='map'>
          Loading Map...
        </div>
      );

    return (
      <div className={`container `} id='map'>
        {loadError ? (
          <div>Error loading maps</div>
        ) : (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={7}
            center={
              properties?.length > 0
                ? {
                    lat: properties?.[0]?.latLng?.lat,
                    lng: properties?.[0]?.latLng?.lng,
                  }
                : {
                    lat: properties?.[6]?.latLng?.lat,
                    lng: properties?.[6]?.latLng?.lng,
                  }
            }
            options={{
              styles: customDesign,
            }}
          >
            <MarkerClustererF
              averageCenter
              gridSize={40}
              maxZoom={24}
              minimumClusterSize={2}
              styles={[
                {
                  url: '/cluster-icon.svg',
                  height: 53,
                  width: 53,
                  textColor: 'white',
                  textSize: 12,
                  className: 'cluster',
                },
              ]}
            >
              {(clusterer) => (
                <>
                  {properties?.map((property) => {
                    const {
                      _id,
                      propertyName,
                      address,
                      city,
                      province,
                      price,
                      latLng,
                    } = property || selectedProperty || {};

                    return (
                      <MarkerF
                        key={_id}
                        position={{
                          lat: latLng?.lat,
                          lng: latLng?.lng,
                        }}
                        clusterer={clusterer}
                        onClick={() => handleMarkerClick(property)}
                      >
                        {selectedProperty?._id === _id &&
                          latLng?.lat !== undefined &&
                          latLng?.lng !== undefined && (
                            <InfoWindowF
                              position={{ lat: latLng.lat, lng: latLng.lng }}
                              onCloseClick={handleInfoWindowClose}
                            >
                              <div className='bg-white p-4 rounded-lg shadow-md'>
                                <Link
                                  to={`/property/${_id}?propertyName=${propertyName}`}
                                  className='text-xl font-bold text-blue-600 hover:underline mb-2 block'
                                >
                                  {propertyName}
                                </Link>
                                <div className='text-gray-600 mb-2'>
                                  <p>{address}</p>
                                  <p>
                                    {city}, {province}
                                  </p>
                                </div>
                                <p className='text-green-600 font-semibold'>
                                  {price} THB
                                </p>
                              </div>
                            </InfoWindowF>
                          )}
                      </MarkerF>
                    );
                  })}
                </>
              )}
            </MarkerClustererF>
          </GoogleMap>
        )}
      </div>
    );
  }
);

MapCluster.displayName = 'MapCluster';
export default MapCluster;
