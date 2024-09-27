import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Form, Input } from "antd";
import useGoogleMapsLoader from "../../utils/useGoogleMap";

function LocationInput({
  location,
  setLocation,

  type,
  placeholder,
}) {
  const [searchResult, setSearchResult] = useState("Result: none");

  const { isLoaded } = useGoogleMapsLoader();

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    // console.log({ searchResult });
    if (searchResult != null && searchResult) {
      const place = searchResult.getPlace();
      const name = place.name;

      // const latLng = {
      //   lat: place.geometry.location.lat(),
      //   lng: place.geometry.location.lng(),
      // };
      // setSelectedLocation(latLng);
      if (type === "province") {
        setLocation((prev) => ({ ...prev, province: name }));
      } else {
        setLocation((prev) => ({ ...prev, city: name }));
      }
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
        onChange={(e) =>
          type === "province"
            ? setLocation((prev) => ({ ...prev, province: e.target.value }))
            : setLocation((prev) => ({ ...prev, city: e.target.value }))
        }
        value={type === "province" ? location?.province : location?.city}
        required
        placeholder={placeholder}
      />
    </Autocomplete>
  );
}

export default LocationInput;
