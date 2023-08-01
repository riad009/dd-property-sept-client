import { BiChevronRight } from "react-icons/bi";

const SectionHeader = ({ title, clickEvent }) => {
  return (
    <div onClick={clickEvent} className="flex items-center justify-between">
      <h1 className="font-semibold text-3xl mb-3">{title}</h1>
      <p className="flex items-center text-danger text-sm">
        View More <BiChevronRight className="text-xl" />
      </p>
    </div>
  );
};

export default SectionHeader;
