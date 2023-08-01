import { BiChevronRight } from "react-icons/bi";

const SectionHeader = ({ title, clickEvent, newItem }) => {
  return (
    <div onClick={clickEvent} className="flex items-center justify-between">
      <h1 className="flex items-center gap-4 font-semibold text-3xl mb-3">
        {title}{" "}
        {newItem && (
          <span className="bg-danger text-xs text-white py-1 px-2 rounded-md">
            NEW
          </span>
        )}
      </h1>
      <p className="flex items-center text-danger text-sm">
        View More <BiChevronRight className="text-xl" />
      </p>
    </div>
  );
};

export default SectionHeader;
