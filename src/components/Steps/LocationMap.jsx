import React, { useContext } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { AuthContext } from "../../providers/AuthProvider";

const LocationMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBSK3Pnsh-wvplEf7bac88yxhwL7EEPORM",
    libraries: ["places"],
  });
  const { setPropertyData, propertyData } = useContext(AuthContext);
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "50px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "500px",
        }}
        center={propertyData?.latLng}
        zoom={15}
        onLoad={onMapLoad}
      >
        <MarkerF
          position={propertyData?.latLng}
          options={{
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",

              scaledSize: {
                width: 40,
                height: 40,
              },
            },
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default LocationMap;
