import { Popover, Progress, Select } from "antd";
import { useEffect } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import FormInput from "../forms/FormInput";

const ContactStep = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="bg-white "
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
        Almost Done
      </p>
      <p
        style={{
          fontSize: "20px",
          marginBottom: "10px",
        }}
      >
        Enter your contact information
      </p>

      <div className="w-full max-w-[600px] flex flex-col gap-4">
        <div>
          <FormInput
            type="text"
            name="contactName"
            size="large"
            placeholder="name"
            label="Your name"
            required={true}
          />
        </div>
        <div>
          <FormInput
            type="email"
            name="contactEmail"
            size="large"
            placeholder="email"
            label="Your Email"
            required={true}
          />
        </div>
        <div>
          <FormInput
            type="number"
            name="contactNumber"
            size="large"
            placeholder="number"
            label="Your number"
            required={true}
          />
        </div>

        <div>
          <FormInput
            type="text"
            name="contactAddress"
            size="large"
            placeholder="address"
            label="Your address"
            required={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactStep;
