import { memo, useEffect, useState } from 'react';
import {
  GoogleMap,
  InfoWindowF,
  MarkerClustererF,
  MarkerF,
} from '@react-google-maps/api';

import { customDesign } from '../constants/footerItem';
import useGoogleMapsLoader from '../utils/useGoogleMap';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const MapCluster = memo(({ properties }) => {
  const { isLoaded, loadError } = useGoogleMapsLoader();
  const [selectedProperty, setSelectedProperty] = useState(null);

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
                  const { _id, headline, latLng } = selectedProperty || {};

                  return (
                    <MarkerF
                      key={property._id}
                      position={{
                        lat: property?.latLng.lat,
                        lng: property?.latLng.lng,
                      }}
                      clusterer={clusterer}
                      onClick={() => handleMarkerClick(property)}
                    >
                      {_id === property._id &&
                        latLng?.lat !== undefined &&
                        latLng?.lng !== undefined && (
                          <InfoWindowF
                            position={{ lat: latLng?.lat, lng: latLng?.lng }}
                            onCloseClick={handleInfoWindowClose}
                          >
                            <div>
                              <div>
                                <h5>{headline}</h5>
                                {/* <div>
                                  <div>{address}</div>
                                  <div>
                                    Tlf.:{" "}
                                    <a href={`tel:+45${phone}`}>+45 {phone}</a>
                                  </div>
                                  <div>
                                    <a href={`mailto:${email}`}>{email}</a>
                                  </div>
                                </div> */}
                              </div>
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
});

MapCluster.displayName = 'MapCluster';
export default MapCluster;
