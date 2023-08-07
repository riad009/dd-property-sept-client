import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const TrendingCategory = ({ title }) => {
  return (
    <Link
      to="/"
      className="hover:text-danger/70 cursor-pointer flex items-center text-danger "
    >
      {title}
      <BiChevronRight />
    </Link>
  );
};

export default TrendingCategory;
