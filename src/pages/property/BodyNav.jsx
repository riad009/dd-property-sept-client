import { Link } from "react-router-dom";
import SmallContainer from "../../shared/SmallContainer";
import { CiHeart, CiShare2 } from "react-icons/ci";

const bodyNavItems = [
  {
    label: "Overview",
    path: "#overview",
  },
  {
    label: "room layout",
    path: "#roomLayout",
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
    <div className="bg-dark/10 border-t border-dark shadow text-sm">
      <SmallContainer extraClasses="flex justify-between items-center p-5">
        <div className="flex items-center gap-3">
          {bodyNavItems.map((item, index) => (
            <Link key={index} to={item.path} className="hover:text-danger">
              {item.label}
            </Link>
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
