import { Divider } from "antd";
import TextRed from "../../components/TextRed";
import { MdLocationOn } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { GiBathtub, GiBed } from "react-icons/gi";

const Overview = ({property}) => {
  const {address,state,city,country}=property?.location ||{};
  const {startPrice ,monthlyInstallments,bedrooms,bathrooms, area} =property?.detailInformation ||{};
  return (
    <div>
      <h1 className="text-2xl mb-5">Overview</h1>
      {/* Cost */}
      <div className="flex gap-5">
        <div>
          <p className="text-sm text-dark2">Start</p>
          <p className="text-sm text-dark font-[500]">฿{startPrice}</p>
        </div>
        <Divider type="vertical h-10" />
        <div>
          <p className="text-sm text-dark2">Estimated Monthly Installments</p>
          <p className="text-sm text-dark font-[500]">
            ฿{monthlyInstallments} Month <TextRed to="#">See More Details</TextRed>
          </p>
        </div>
      </div>
      <Divider />
      {/* Room Details */}
      <div className="flex gap-5 mb-2">
        <div>
          <p className="text-sm text-dark2">Bedroom</p>
          <p className="flex items-center gap-2 text-sm text-dark font-[500]">
            <GiBed className="text-xl" /> {bedrooms}
          </p>
        </div>
        <div>
          <p className="text-sm text-dark2">Bathroom</p>
          <p className="flex items-center gap-2 text-sm text-dark font-[500]">
            <GiBathtub className="text-xl" /> {bathrooms}
          </p>
        </div>
        <div>
          <p className="text-sm text-dark2">Unit</p>
          <p className="flex items-center gap-2 text-sm text-dark font-[500]">
            <RiCommunityFill className="text-xl" /> {area} sq.m.
          </p>
        </div>
      </div>

      {/* Location */}
      <div>
        <p className="text-sm text-dark2 mt-4">Location</p>
        <p className="flex items-center gap-1 text-sm text-dark font-[500]">
          <MdLocationOn className="text-xl" /> {address}, {state}, {city}, {country}
        </p>
      </div>
      <Divider className="bg-dark2/50" />
    </div>
  );
};

export default Overview;
