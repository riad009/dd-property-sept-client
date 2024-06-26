import React, { useContext, useState } from "react";
import FormInput from "./FormInput";
import FormSelectField from "./FormSelectField";
import FormRadio from "./FormRadio";
import { Popover, Radio, Space } from "antd";
import FurnishOptions from "../FurnishOptions";
import FormtTextarea from "./FormTextarea";
import { AuthContext } from "../../providers/AuthProvider";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
export const pricingDetails = [
  {
    value: "Daily",
    label: "Day Price",
  },
  {
    value: "Monthly",
    label: "Month Price",
  },
  {
    value: "Yearly",
    label: "Year Price",
  },
];
const DetailsStepForm = ({ listingType }) => {
  const { propertyData, setPropertyData } = useContext(AuthContext);

  let propertyTypes = [
    {
      value: "House",
      label: "House",
    },
    {
      value: "Townhouse",
      label: "Townhouse",
    },
    {
      value: "Apartment",
      label: "Apartment",
    },
    {
      value: "Condo",
      label: "Condo",
    },
    {
      value: "Land",
      label: "Land",
    },
  ];

  const onChangePropertyType = (value) => {
    console.log({ value });
    setPropertyData((prev) => ({ ...prev, propertyType: value }));
  };

  const content = (
    <div className="max-w-[400px] text-xs">
      <p>
        Provide a thorough description about the property and the unit to engage
        property seekers. This improves your listing quality score at the same
        time. Recommended word count: at least 50.
      </p>
    </div>
  );
  const floorOptions = Array.from({ length: 60 }, (_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1}`,
  }));

  console.log({ propertyData });

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

      <div className="w-full mb-4">
        <FormSelectField
          type="text"
          name="propertyType"
          size="large"
          label={`Property Type`}
          options={propertyTypes}
          customOnChange={onChangePropertyType}
          required={true}
        />
      </div>
      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Price (THB)
        <span className="text-red-600 text-sm">(Required*)</span>
      </p>
      <div className="flex gap-4">
        <div className="w-full">
          <FormInput
            type="number"
            name="price"
            size="large"
            placeholder="Price (THB)"
            // label="Listing Price"
            required={true}
          />
        </div>
        <div className="w-full">
          {listingType === "forSale" ||
          propertyData?.propertyType === "Land" ? (
            <FormInput
              type="text"
              name="priceType"
              size="large"
              placeholder="Price Type"
              disabled={true}
              value={"THB"}
            />
          ) : (
            <FormSelectField
              type="text"
              name="rentDuration"
              size="large"
              options={pricingDetails}
            />
          )}
        </div>
      </div>

      {propertyData?.propertyType !== "Land" && (
        <>
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
                    value: "1",
                    label: "1 Bedrooms",
                  },
                  {
                    value: "2",
                    label: "2 Bedrooms",
                  },
                  {
                    value: "3",
                    label: "3 Bedrooms",
                  },
                  {
                    value: "4",
                    label: "4 Bedrooms",
                  },
                  {
                    value: "5",
                    label: "5 Bedrooms",
                  },
                  {
                    value: "10",
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
            {/* <div className="w-full">
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
            </div> */}
          </div>
        </>
      )}

      <hr className="mt-8 mb-6" />

      <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
        Size m²
        <span className="text-red-600 text-sm">(Required*)</span>
      </p>

      <div className="w-full">
        <FormInput
          name="size"
          size="large"
          placeholder="Size"
          required={true}
        />
      </div>

      {propertyData?.propertyType !== "Land" && (
        <>
          <hr className="mt-8 mb-6" />

          <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
            Floor Size
            <span className="text-red-600 text-sm">(Required*)</span>
          </p>

          <div className="w-full">
            <FormSelectField
              type="text"
              name="floorSize"
              size="large"
              placeholder="Floor Size"
              options={floorOptions}
            />
          </div>
        </>
      )}
      <hr className="mt-8 mb-6" />

      {/* <p className="text-[18px] font-medium inline-flex items-center gap-x-2 pb-1">
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

      <hr className="mt-8 mb-6" /> */}

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
            required={true}
          />
        </div>

        <div className="w-full">
          <FormInput
            type="text"
            name="headline"
            size="large"
            placeholder="Headline"
            required={true}
          />
        </div>

        <Popover
          content={content}
          title={
            <>
              <div className="flex items-center gap-1 text-sm">
                <MdOutlineTipsAndUpdates />
                Tips
              </div>
            </>
          }
        >
          <div className="w-full">
            <FormtTextarea
              type="text"
              name="descriptionEnglish"
              size="large"
              placeholder="Description"
              required={true}
            />
          </div>
        </Popover>
      </div>

      {/* <hr className="mt-8 mb-6" />

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
      /> */}
    </div>
  );
};

export default DetailsStepForm;
