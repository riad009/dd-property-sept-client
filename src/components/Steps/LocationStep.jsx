import React, { useContext, useEffect, useState } from "react";
import ProfileInput from "../ProfileInput";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { AuthContext } from "../../providers/AuthProvider";
import AllResidentialDropdown from "../AllResidentialDropdown";
import { footer1Items } from "../../pages/Home/SearchLocation";
import LocationInput from "./LocationInput";

const LocationStep = () => {
  const { location, setLocation } = useContext(AuthContext);
  const [propertyType, setPropertyType] = useState("residential");
  const [value, setValue] = useState("All Residential");

  const [placeName, setPlaceName] = useState("");

  const [selectedLocation, setSelectedLocation] = useState({});

  const [footer1Open, setFooter1Open] = useState(false);
  const [footer2Open, setFooter2Open] = useState(false);
  const [footer3Open, setFooter3Open] = useState(false);

  const footer1Handler = () => {
    setFooter1Open(!footer1Open);
    setFooter2Open(false);
    setFooter3Open(false);
  };

  const footer2Handler = () => {
    setFooter1Open(false);
    setFooter2Open(!footer2Open);
    setFooter3Open(false);
  };

  const footer3Handler = () => {
    setFooter1Open(false);
    setFooter2Open(false);
    setFooter3Open(!footer3Open);
  };

  const radioHandler = (e) => {
    setFooter1Open(true);

    setValue(e.target.value);
  };
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

      <p
        style={{
          fontSize: "16px",
          marginBottom: "14px",
        }}
        className=""
      >
        Search by property name, street address or postal code
      </p>

      <div className="grid grid-cols-1 max-w-[600px]">
        <div className="mb-[12px]">
          {/* <FormInput
            type="text"
            name="location"
            size="large"
            label="Location"
            customOnChange={(e) => setLocation(e.target.value)}
            required={true}
          /> */}
          <LocationInput
            setSelectedLocation={setSelectedLocation}
            location={location}
            setLocation={setLocation}
          />
          <p className="text-[14px] text-gray-400 py-2">
            You can't edit this after your listing has been published
          </p>
        </div>
        {location && (
          <div>
            <div className="mb-[10px]">
              <FormInput
                type="number"
                name="postalCode"
                size="large"
                label="Postal Code"
                required={true}
              />
            </div>
            <div>
              {/* <FormInput
                type="text"
                name="propertyType"
                size="large"
                label="Property Type"
                required={true}
              /> */}
              <p className="text-[15px] pb-1">
                Property Type
                <span className="text-red-600 text-sm"> (Required*)</span>
              </p>
              <AllResidentialDropdown
                footer1Handler={footer1Handler}
                footer1Items={footer1Items}
                footer1Open={footer1Open}
                propertyType={propertyType}
                radioHandler={radioHandler}
                value={value}
                setPropertyType={setPropertyType}
                // checkBoxHandler={checkBoxHandler}
                hideFooter={true}
              />
            </div>
            <p className="text-[14px] text-gray-400 py-2">
              You can't edit this after your listing has been published
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationStep;
