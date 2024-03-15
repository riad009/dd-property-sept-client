import { useState } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { Form, Input } from "antd";

function LocationInput({ location, setLocation, setSelectedLocation }) {
  const [searchResult, setSearchResult] = useState("Result: none");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_map_key,
    libraries: ["places"],
  });

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    // console.log({ searchResult });
    if (searchResult != null && searchResult) {
      const place = searchResult.getPlace();
      const name = place.name;

      const latLng = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setSelectedLocation(latLng);
      setLocation(name);
    } else {
      alert("Please enter text");
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
      <Input
        className="h-[40px]"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
    </Autocomplete>
  );
}

export default LocationInput;
