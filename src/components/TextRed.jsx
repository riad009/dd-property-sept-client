import { Link } from "react-router-dom";

const TextRed = ({ children, onClick, to, extraClasses }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-danger text-sm font-[500] ${extraClasses}`}
    >
      {children}
    </Link>
  );
};

export default TextRed;
