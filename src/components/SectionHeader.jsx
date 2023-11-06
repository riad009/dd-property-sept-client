import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, clickEvent, newItem }) => {
  return (
    <div onClick={clickEvent} className="flex items-center justify-between">
      <h1 className="flex items-center gap-4 font-[300] text-2xl md:text-3xl mb-3">
        {title}{" "}
        {newItem && (
          <span className="bg-danger text-xs text-white py-1 px-2 rounded-md">
            NEW
          </span>
        )}
      </h1>
      <Link to={"/property-for-sale"} className="sm:flex hidden items-center text-danger text-sm">
        View More <BiChevronRight className="text-xl" />
      </Link>
    </div>
  );
};

export default SectionHeader;
