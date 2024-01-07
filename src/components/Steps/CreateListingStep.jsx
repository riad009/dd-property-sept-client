import { Select } from "antd";
import { useState } from "react";
import ProfileInput from "../ProfileInput";
import FormInput from "../forms/FormInput";
import FormtTextarea from "../forms/FormTextarea";
import FormSelectField from "../forms/FormSelectField";

const CreateListingStep = () => {
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
        Create Listing
      </p>
    </div>
  );
};

export default CreateListingStep;
