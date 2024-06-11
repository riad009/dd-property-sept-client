import { Button, Divider, Input, Modal } from "antd";
import Brand from "./Brand";

import TextRed from "./TextRed";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const Register = ({ handleCancel, isModalOpen, setIsModalOpen }) => {
  const [error, setError] = useState("");
  const { userRefetch, setUserRefetch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());
    entries.role = "user";
    setLoading(true);
    try {
      const promise = await axios.post(`/register`, entries);
      if (promise.status === 200) {
        localStorage.setItem("accessToken", promise.data.token);
        setUserRefetch(!userRefetch);
        setError();
        setTimeout(() => {
          handleCancel();
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || `Log in failed`);
    }
  };

  return (
    <Modal
      label="Auth Modal"
      onCancel={handleCancel}
      open={isModalOpen}
      footer={null}
    >
      <div className="text-center p-5">
        <Brand center />
        <h1 className="my-4 font-semibold text-xl">Welcome to DDproperty</h1>
        <p className="my-2 text-sm">
          Register up to get the most out of your DDproperty experience.
        </p>

        <form onSubmit={handleSubmit} className="my-5 flex flex-col gap-2">
          <Input name="name" required placeholder="Name" />
          <Input name="email" required placeholder="Email address" />
          <Input
            name="password"
            required
            type="password"
            placeholder="Password"
          />

          <Button
            disabled={loading}
            htmlType="submit"
            type="submit"
            className="bg-danger text-white w-full hover:bg-danger/90"
          >
            {loading ? "Registering.." : "Register"}
          </Button>

          {error && <p className="text-danger">{error}</p>}
        </form>

        <div className="my-5">
          <p>Already have an account?</p>
          <TextRed
            onClick={() => {
              setIsModalOpen(true);
              handleCancel();
            }}
            extraClasses="hover:text-danger/80"
          >
            Login
          </TextRed>
        </div>

        <Divider />

        <p className="text-xs">
          I agree to DDproperty&apos;s Terms of Service and Privacy Policy
          including the collection, use and disclosure of my personal
          information.
        </p>
      </div>
    </Modal>
  );
};

export default Register;
