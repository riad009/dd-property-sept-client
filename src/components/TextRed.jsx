import { Link } from "react-router-dom";

const TextRed = ({ children, onClick, to, className }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-danger text-sm font-[500] ${className}`}
    >
      {children}
    </Link>
  );
};

export default TextRed;
