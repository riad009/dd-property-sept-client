import React from "react";
import ProfileInput from "../ProfileInput";
import { Checkbox } from "antd";
import FormCheckbox from "../forms/FormCheckbox";
import FormInput from "../forms/FormInput";

const DetailsStep = () => {
  const plainOptions = [
    "Air Conditionning",
    "Barbeque",
    "Dryer",
    "Gym",
    "Laundry",
    "Microwave",
    "Outdoor Shower",
    "Refrigerator",
    "Sauna",
    "Lawn",
    "TV Cable",
    "Washer",
    "Wifi",
    "Window Coverings",
    "Swimming Pool",
  ];
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
        Detailed Information
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="propertyId"
            size="large"
            label="Property Id"
          />
        </div>

        <div className="mb-[10px]">
          <FormInput type="text" name="tenure" size="large" label="Tenure" />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="developer"
            size="large"
            label="Developer"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="areaSize"
            size="large"
            label="Area Size"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="sizePrefix"
            size="large"
            label="Size Prefix"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="landArea"
            size="large"
            label="Land Area"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="landAreaSizePostfix"
            size="large"
            label="Land Area Size Postfix"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="bedrooms"
            size="large"
            label="bedrooms"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="bathrooms"
            size="large"
            label="Bathrooms"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput type="text" name="garages" size="large" label="Garages" />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="garageSize"
            size="large"
            label="Garage Size"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="yearBuild"
            size="large"
            label="Year Build"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="videoUrl"
            size="large"
            label="Video Url"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="virtualTourUrl"
            size="large"
            label="360 Degree Virtual Tour"
          />
        </div>
        <div className="mb-[10px] md:col-span-3">
          <FormCheckbox
            options={plainOptions}
            name="amenities"
            label="Amenities"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsStep;
