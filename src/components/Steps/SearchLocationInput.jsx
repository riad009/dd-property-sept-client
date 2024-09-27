import { useContext, useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Form, Input } from "antd";
import { AuthContext } from "../../providers/AuthProvider";
import useGoogleMapsLoader from "../../utils/useGoogleMap";

function SearchLocationInput({ placeName, setPlaceName, setSelectedLocation }) {
  const { setPropertyData, propertyData } = useContext(AuthContext);
  const [searchResult, setSearchResult] = useState("Result: none");
  const { isLoaded, loadError } = useGoogleMapsLoader();

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
      setPropertyData((prev) => ({ ...prev, latLng: latLng }));
      setPropertyData((prev) => ({ ...prev, location: name }));
    } else {
      alert("Please enter text");
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  //   console.log({ placeName });

  return (
    <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
      <Input
        size="large"
        required={true}
        name="location"
        id="search-bar"
        onChange={(e) =>
          setPropertyData((prev) => ({ ...prev, location: e.target.value }))
        }
        value={propertyData?.location}
        placeholder="Search a location"
        autoComplete="off"
      />
    </Autocomplete>
  );
}

export default SearchLocationInput;
