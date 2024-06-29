import { Popover, Progress, Select } from "antd";
import { useContext, useEffect, useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import FormInput from "../forms/FormInput";

import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ContactStep = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user) {
      setUsername(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
      setAddress(user.address || '');
      setIsLoading(false);  // Indicate loading is complete
    }
  }, [user]);

  useEffect(() => {
    if (!isLoading && (!username || !email || !phone || !address)) {
      alert("Please update your profile and enter your address and phone number and try again.");
      navigate('/dashboard/my-profile');
    }
  }, [username, email, phone, address, isLoading, navigate]);

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
            value={username}
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
            value={email}
          />
        </div>
        <div>
          <FormInput
            name="contactNumber"
            size="large"
            placeholder="number"
            label="Your number"
            required={true}
            value={phone}
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
            value={address}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactStep;
