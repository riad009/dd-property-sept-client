import { Link } from "react-router-dom";
import SmallContainer from "../../shared/SmallContainer";
import { CiHeart, CiShare2 } from "react-icons/ci";

const bodyNavItems = [
  {
    label: "Overview",
    path: "#overview",
  },
  {
    label: "Unit Types",
    path: "#unitTypes",
  },
  {
    label: "Facilities & Nearby Places",
    path: "#facilities",
  },
  {
    label: "Home Loan",
    path: "#homeLoan",
  },
  {
    label: "Location",
    path: "#location",
  },
];

const BodyNav = () => {
  return (
    <div className="bg-black text-white shadow text-sm">
      <SmallContainer extraClasses="flex justify-between items-center p-5">
        <div className="flex items-center gap-3 sm:overflow-auto overflow-x-scroll">
          {bodyNavItems.map((item, index) => (
            <a key={index} href={item.path} className="hover:text-danger">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <CiHeart />
            Announcement Record
          </div>
          <div className="flex items-center gap-2">
            <CiShare2 />
            Share
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default BodyNav;
