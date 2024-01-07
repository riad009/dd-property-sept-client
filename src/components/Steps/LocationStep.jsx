import React from "react";
import ProfileInput from "../ProfileInput";
import FormInput from "../forms/FormInput";

const LocationStep = () => {
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
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Location
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-[10px]">
          <FormInput type="text" name="address" size="large" label="Address" />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="district"
            size="large"
            label="District"
          />
        </div>

        <div className="mb-[10px]">
          <FormInput type="text" name="city" size="large" label="City" />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="neighborhood"
            size="large"
            label="Neighborhood"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput type="text" name="zip" size="large" label="Zip" />
        </div>
        <div className="mb-[10px]">
          <FormInput type="text" name="country" size="large" label="country" />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="googleMapStreetView"
            size="large"
            label="Google Map Street View"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationStep;
