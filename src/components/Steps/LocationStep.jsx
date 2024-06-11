import React, { useContext, useEffect, useState } from "react";

import FormInput from "../forms/FormInput";

import { AuthContext } from "../../providers/AuthProvider";

import LocationInput from "./LocationInput";
import SearchLocationInput from "./SearchLocationInput";
import LocationMap from "./LocationMap";

import { useNavigate } from "react-router-dom";
import { Form } from "antd";

const LocationStep = () => {
  const { setPropertyData, propertyData } = useContext(AuthContext);
  const [placeName, setPlaceName] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 13.736717,
    lng: 100.523186,
  });
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!propertyData?.type) {
  //     navigate("/dashboard/create-listing");
  //   }
  // }, [propertyData?.type]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="bg-white"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          fontSize: "28px",
          marginBottom: "10px",
        }}
        className="font-semibold"
      >
        Create Listing: Location
      </p>

      <p
        style={{
          fontSize: "24px",
          marginBottom: "14px",
        }}
        className="inline-flex items-center gap-2 font-medium"
      >
        Listing Location{" "}
        <span className="text-red-600 text-sm">(Required*)</span>
      </p>

      <div className="grid grid-cols-1 max-w-[600px]">
        <div>
          <div className="mb-2">
            <div className="w-full">
              <FormInput
                type="text"
                name="propertyName"
                size="large"
                label={`Name of the property`}
                required={true}
              />
            </div>
          </div>
          <div className="mb-2">
            <p className="text-[15px] pb-1">
              Province
              <span className="text-red-600 text-sm"> (Required*)</span>
            </p>
            <LocationInput
              setSelectedLocation={setSelectedLocation}
              location={propertyData}
              setLocation={setPropertyData}
              type="province"
              placeholder="Enter province"
            />
          </div>

          <div className="mb-2">
            <p className="text-[15px] pb-1">
              City
              <span className="text-red-600 text-sm"> (Required*)</span>
            </p>
            <LocationInput
              setSelectedLocation={setSelectedLocation}
              location={propertyData}
              setLocation={setPropertyData}
              type="city"
              placeholder="Enter city"
            />
          </div>
          <div>
            <p className="text-[15px] pb-1">
              Location
              <span className="text-red-600 text-sm"> (Required*)</span>
            </p>
            <SearchLocationInput
              setSelectedLocation={setSelectedLocation}
              placeName={placeName}
              setPlaceName={setPlaceName}
            />
          </div>

          <div>
            {selectedLocation.lat && selectedLocation.lng && (
              <LocationMap selectedLocation={selectedLocation} />
            )}
          </div>
          <p className="text-[14px] text-gray-400 py-2">
            You can't edit this after your listing has been published
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationStep;
