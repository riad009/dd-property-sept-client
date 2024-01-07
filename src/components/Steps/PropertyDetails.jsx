import React, { useState } from "react";

import FormInput from "../forms/FormInput";
import FormtTextarea from "../forms/FormTextarea";
import UploadImage from "../UploadImage";

const PropertyDetails = () => {
  const [planImage, setPlanImage] = useState(null);
  const [loading, setLoading] = useState(false);
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
        Property Details
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-[10px]">
          <FormInput type="text" name="address" size="large" label="Address" />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="planBedrooms"
            size="large"
            label="Plan Bedrooms"
          />
        </div>

        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="planBathrooms"
            size="large"
            label="Plan Bathrooms"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="planPrice"
            size="large"
            label="Plan Price"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="pricePostfix"
            size="large"
            label="Price Postfix"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="planSize"
            size="large"
            label="Plan Size"
          />
        </div>
        <div className="mb-[10px]">
          <FormtTextarea
            type="text"
            name="planDescription"
            size="large"
            label="Plan Description"
          />
        </div>

        <div className="mb-[10px]">
          <UploadImage name="planImage" label="Plan Image" />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
