import { LoadingOutlined } from "@ant-design/icons";

const Button = ({ children, loading, extraClasses, small, type }) => {
  return (
    <button
      type={type}
      className={`flex gap-2 items-center rounded cursor-pointer ${
        small ? "py-1 px-4" : "py-2 px-6"
      } ${extraClasses}`}
    >
      {loading && <LoadingOutlined />}
      {children}
    </button>
  );
};

export default Button;
