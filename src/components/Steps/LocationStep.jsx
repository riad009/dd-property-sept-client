import React, { useEffect, useState } from "react";
import ProfileInput from "../ProfileInput";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";

const LocationStep = () => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, {});
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
          <FormSelectField
            type="text"
            name="location"
            size="large"
            label="Location"
            customOnChange={(value) => setLocation(value)}
            options={[
              {
                value: "Value1",
                label: "Value 1",
              },
              {
                value: "Value2",
                label: "Value 2",
              },
              {
                value: "Value3",
                label: "Value 3",
              },
              {
                value: "Value4",
                label: "Value 4",
              },
            ]}
          />
          <p className="text-[14px] text-gray-400 py-2">
            You can't edit this after your listing has been published
          </p>
        </div>
        {location && (
          <div>
            <div className="mb-[10px]">
              <FormInput
                type="text"
                name="postalCode"
                size="large"
                label="Postal Code"
              />
            </div>
            <div>
              <FormInput
                type="text"
                name="propertyType"
                size="large"
                label="Property Type"
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
