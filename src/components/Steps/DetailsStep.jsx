import React, { useContext, useEffect, useState } from "react";
import ProfileInput from "../ProfileInput";
import { Checkbox, Radio } from "antd";
import FormCheckbox from "../forms/FormCheckbox";
import FormInput from "../forms/FormInput";
import DetailsStepForm from "../forms/DetailsStepForm";
import { AuthContext } from "../../providers/AuthProvider";

const DetailsStep = () => {
  const { propertyData, setPropertyData } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleListingType = ({ target: { value } }) => {
    setPropertyData((prev) => ({ ...prev, listingType: value }));
  };
  console.log({propertyData})
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
        Create Listing: Details
      </p>

      <p
        style={{
          fontSize: "24px",
          // marginBottom: "4px",
        }}
        className="inline-flex items-center gap-2 font-medium"
      >
        Listing Type <span className="text-red-600 text-sm">(Required*)</span>
      </p>

      <p className="text-[14px] text-gray-400 pb-4">
        You can't edit this after your listing has been published
      </p>

      <div className="grid grid-cols-1 max-w-[600px] mt-2">
        <p className="text-[14px]">Select one to continue</p>
        <Radio.Group
          onChange={handleListingType}
          value={propertyData?.listingType}
          buttonStyle="solid"
          size="large"
          style={{
            marginBottom: 8,
          }}
        >
          <Radio.Button value="forSale">For Sale</Radio.Button>
          <Radio.Button value="forRent">For Rent</Radio.Button>
        </Radio.Group>

        {propertyData?.listingType && (
          <div className="mt-4">
            <DetailsStepForm listingType={propertyData?.listingType} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsStep;
