import { Button, Divider, Input, Modal } from "antd";
import Brand from "../Brand";
import { FcGoogle } from "react-icons/fc";
import { RiAppleFill, RiFacebookCircleFill } from "react-icons/ri";
import TextRed from "../TextRed";
import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

const LoginModal = ({ handleCancel, isModalOpen }) => {
  const { login, signup } = useAuth();

  const [username, setUsername] = useState("");
  const [nameInput, setNameInput] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Enter valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      if (nameInput && nameInput.length !== 0) {
        await signup(email, password, username);
        handleCancel();
      } else {
        await login(email, password);
        handleCancel();
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setNameInput(true);
        setError("User not found. Enter your name and continue registration");
      }
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
          Log in or sign up to get the most out of your DDproperty experience.
        </p>

        <form onSubmit={loginHandler} className="my-5 flex flex-col gap-2">
          <Input
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />
          <Input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          {nameInput && (
            <Input
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="User Name"
            />
          )}
          <Button
            htmlType="submit"
            type="submit"
            className="bg-danger text-white w-full hover:bg-danger/90"
          >
            Continue
          </Button>

          {error && <p className="text-danger">{error}</p>}
        </form>
        <div className="flex items-center justify-center my-5">
          <hr className="border-1 bg-dark mx-3 w-full" />
          Or <hr className="border-1 bg-dark mx-3 w-full" />
        </div>

        <Button
          className="w-full mb-2 flex items-center justify-center bg-white"
          icon={<FcGoogle className="text-xl text-" />}
        >
          Continue with Google
        </Button>
        <Button
          className="w-full mb-2 flex items-center justify-center bg-white"
          icon={<RiAppleFill className="text-xl text-dark2" />}
        >
          Continue with Apple
        </Button>
        <Button
          className="w-full mb-2 flex items-center justify-center bg-white"
          icon={<RiFacebookCircleFill className="text-xl text-sky-500" />}
        >
          Continue with Facebook
        </Button>

        <div className="my-5">
          <p>Are you an agent?</p>
          <TextRed extraClasses="hover:text-danger/80">
            Log In to Agent Net
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

export default LoginModal;
