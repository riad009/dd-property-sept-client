import { LoadingOutlined } from "@ant-design/icons";

const Button = ({
  children,
  loading,
  extraClasses,
  small,
  type,
  clickEvent,
}) => {
  return (
    <button
      onClick={clickEvent}
      type={type}
      className={`text-xs py-2 flex gap-2 items-center rounded cursor-pointer ${
        small ? "px-4" : "px-6"
      } ${extraClasses}`}
    >
      {loading && <LoadingOutlined />}
      {children}
    </button>
  );
};

export default Button;
