import React, { useCallback } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { Spin } from "antd";

const MapLocation = ({ location, setMap }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBSK3Pnsh-wvplEf7bac88yxhwL7EEPORM",
        libraries: ["places"],
    });

    const onMapLoad = useCallback(
        (map) => {
            setMap(map);
        },
        [setMap]
    );

    if (loadError) return <div>Error loading maps</div>;

    return (
        <div className="w-full h-full flex items-center justify-center">
            {!isLoaded ? (
                <Spin size="large" />
            ) : (
                <div className="w-full h-96 md:h-128 lg:h-160">
                    <GoogleMap
                        mapContainerStyle={{ height: "100%", width: "100%" }}
                        center={location}
                        zoom={15}
                        onLoad={onMapLoad}
                    >
                        <MarkerF
                            position={location}
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
            )}
        </div>
    );
};

export default MapLocation;
