import React, { useContext, useState } from "react";
import FormInput from "./FormInput";
import FormSelectField from "./FormSelectField";
import FormRadio from "./FormRadio";
import { Radio, Space } from "antd";
import FurnishOptions from "../FurnishOptions";
import FormtTextarea from "./FormTextarea";
import { AuthContext } from "../../providers/AuthProvider";

const DetailsStepForm = ({ listingType }) => {
  const {
    availabilityForLiveTour,
    setFurnishObjects,
    setAvailabilityForLiveTour,
    setUnitFeatures,
    furnishValue,
    setFurnishValue,
  } = useContext(AuthContext);

  const handleFurnishObj = (selectedCategories) => {
    setFurnishObjects(selectedCategories);
  };

  const handleUnitFeatures = (selectedCategories) => {
    setUnitFeatures(selectedCategories);
  };

  return (
    <div>
      <p className="text-[17px] ">
        {listingType === "forSale"
          ? "You are creating a listing to sell a unit. Add more details about the unit below."
          : listingType === "forRent"
          ? "You are creating a listing to rent out an entire unit/a room only. Add more details about the unit below."
          : "You are creating a listing for option to buy. Add more details about the unit below."}
      </p>
      <hr className="my-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Listing Price
        <span className="text-red-600 text-sm">(Required*)</span>
      </p>
      <div className="flex gap-4">
        <div className="w-full">
          <FormInput
            type="text"
            name="listingPrice"
            size="large"
            placeholder="Price"
            // label="Listing Price"
            // required={true}
          />
        </div>
        <div className="w-full">
          <FormSelectField
            type="text"
            name="priceType"
            size="large"
            placeholder="Price Type"
            options={[
              {
                value: "baht",
                label: "Baht",
              },
              {
                value: "negotiable",
                label: "Negotiable",
              },
            ]}
          />
        </div>
      </div>

      <hr className="mt-8 mb-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Rooms
        <span className="text-red-600 text-sm">(Required*)</span>
      </p>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <FormSelectField
            type="text"
            name="bedrooms"
            size="large"
            placeholder="Bedrooms"
            options={[
              {
                value: "1bed",
                label: "1 Bedrooms",
              },
              {
                value: "2bed",
                label: "2 Bedrooms",
              },
              {
                value: "3bed",
                label: "3 Bedrooms",
              },
              {
                value: "4bed",
                label: "4 Bedrooms",
              },
              {
                value: "5bed",
                label: "5 Bedrooms",
              },
              {
                value: "10+bed",
                label: "10+ Bedrooms",
              },
            ]}
          />
        </div>
        <div className="w-full">
          <FormSelectField
            type="text"
            name="bathrooms"
            size="large"
            placeholder="Bathrooms"
            options={[
              {
                value: "1bed",
                label: "1 Bathrooms",
              },
              {
                value: "2bed",
                label: "2 Bathrooms",
              },
              {
                value: "3bed",
                label: "3 Bathrooms",
              },
              {
                value: "4bed",
                label: "4 Bathrooms",
              },
              {
                value: "5bed",
                label: "5 Bathrooms",
              },
              {
                value: "10+bed",
                label: "10+ Bathrooms",
              },
            ]}
          />
        </div>
        <div className="w-full">
          <FormSelectField
            type="text"
            name="maidrooms"
            size="large"
            placeholder="Maidrooms"
            options={[
              {
                value: "1bed",
                label: "1 Maidrooms",
              },
              {
                value: "2bed",
                label: "2 Maidrooms",
              },
              {
                value: "3bed",
                label: "3 Maidrooms",
              },
              {
                value: "4bed",
                label: "4 Maidrooms",
              },
              {
                value: "5bed",
                label: "5 Maidrooms",
              },
              {
                value: "10+bed",
                label: "10+ Maidrooms",
              },
            ]}
          />
        </div>
      </div>

      <hr className="mt-8 mb-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Unit Details
        <span className="text-red-600 text-sm">(Required*)</span>
      </p>

      <div className="w-full">
        <FormInput
          type="text"
          name="floorSize"
          size="large"
          placeholder="Floor Size"
        />
      </div>

      <hr className="mt-8 mb-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Building Details
        <span className="text-gray-600 text-sm">(Optional)</span>
      </p>

      <div className="w-full">
        <FormSelectField
          type="text"
          name="floorPosition"
          size="large"
          placeholder="Floor Position"
          options={[
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
            {
              value: "4",
              label: "4",
            },
            {
              value: "5",
              label: "5",
            },
            {
              value: "6",
              label: "6",
            },
          ]}
        />
      </div>
      <hr className="mt-8 mb-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Furnishing
        <span className="text-gray-600 text-sm">(Optional)</span>
      </p>

      <div className="w-full">
        <FormSelectField
          type="text"
          name="facingFrontDoor"
          size="large"
          placeholder="Facing (Front Door)"
          options={[
            {
              value: "North",
              label: "North",
            },
            {
              value: "North East",
              label: "North East",
            },
            {
              value: "North West",
              label: "North West",
            },
            {
              value: "East",
              label: "East",
            },
            {
              value: "West",
              label: "West",
            },
            {
              value: "South East",
              label: "South East",
            },
          ]}
        />
      </div>
      <div className="w-full mt-4">
        <Radio.Group
          onChange={(e) => setFurnishValue(e.target.value)}
          value={furnishValue}
        >
          <Radio value="Unfurnished">Unfurnished</Radio>
          <Radio value="Partially Furnished">Partially Furnished</Radio>
          <Radio value="Fully Furnished">Fully Furnished</Radio>
        </Radio.Group>

        {(furnishValue === "Partially Furnished" ||
          furnishValue === "Fully Furnished") && (
          <FurnishOptions
            onCategoryChange={handleFurnishObj}
            options={[
              { label: "Audio System", id: "Audio System" },
              { label: "Bed", id: "Bed" },
              { label: "Cable TV", id: "Cable TV" },
              { label: "Dining Room Furniture", id: "Dining Room Furniture" },
              { label: "Dishwasher", id: "Dishwasher" },
              { label: "Dryer", id: "Dryer" },
              { label: "DVD Player", id: "DVD Player" },
              { label: "Fridge", id: "Fridge" },
              { label: "Internet Connection", id: "Internet Connection" },
              { label: "Television", id: "Television" },
              { label: "Washing Machine", id: "Washing Machine" },
            ]}
          />
        )}
      </div>

      <hr className="mt-8 mb-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Description
        <span className="text-red-600 text-sm">(Required*)</span>
      </p>

      <div className="flex flex-col gap-4">
        <div className="w-full">
          <FormInput
            type="text"
            name="referenceNote"
            size="large"
            placeholder="Reference Note"
          />
        </div>
        <div className="w-full">
          <FormInput
            type="text"
            name="headline"
            size="large"
            placeholder="Headline"
          />
        </div>
        <div className="w-full">
          <FormtTextarea
            type="text"
            name="descriptionThai"
            size="large"
            placeholder="Description (Thai)"
          />
        </div>
        <div className="w-full">
          <FormtTextarea
            type="text"
            name="descriptionEnglish"
            size="large"
            placeholder="Description (English)"
          />
        </div>
      </div>

      <hr className="mt-8 mb-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Availability For Live Tour
        <span className="text-red-600 text-sm">(Required*)</span>
      </p>

      <div>
        <Radio.Group
          onChange={(e) => setAvailabilityForLiveTour(e.target.value)}
          value={availabilityForLiveTour}
        >
          <Space direction="vertical" className="py-4">
            <Radio value="available">
              Yes, I am available for live viewing via video call
            </Radio>
            <Radio value="unavailable">No, not available</Radio>
          </Space>
        </Radio.Group>
      </div>

      <hr className="mt-8 mb-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Unit Features
        <span className="text-gray-600 text-sm">(Optional)</span>
      </p>

      <FurnishOptions
        onCategoryChange={handleUnitFeatures}
        options={[
          { label: "Air Conditioning", id: "Air Conditioning" },
          { label: "Balcony", id: "Balcony" },
          { label: "Cooker", id: "Cooker" },
          { label: "Corner Unit", id: "Corner Unit" },
          { label: "High Floor", id: "High Floor" },
          { label: "Intercom", id: "Intercom" },
          { label: "Park", id: "Park" },
          { label: "Renovated", id: "Renovated" },
          { label: "Water Heater", id: "Water Heater" },
        ]}
      />
    </div>
  );
};

export default DetailsStepForm;
