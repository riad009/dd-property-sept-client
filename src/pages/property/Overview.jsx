import { Divider } from "antd";
import TextRed from "../../components/TextRed";
import {
  MdFormatSize,
  MdLocationOn,
  MdRoom,
  MdRoomService,
} from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { GiBathtub, GiBed } from "react-icons/gi";

const Overview = ({ property }) => {
  console.log({ property });
  return (
    <div>
      <h1 className="text-2xl mb-5">Overview</h1>
      {/* Cost */}
      <div className="flex gap-5">
        {property.price ? (
          <div>
            <p className="text-sm text-dark2">Start</p>
            <p className="text-sm text-dark font-[500]">฿{property.price}</p>
          </div>
        ) : (
          <div>
            <p className="text-sm text-dark2">Start</p>
            <p className="text-sm text-dark font-[500]">
              ฿
              {property.dailyPrice ||
                property.monthlyPrice ||
                property.yearlyPrice}
            </p>
          </div>
        )}
      </div>
      <Divider />
      {/* Room Details */}
      {property?.propertyType !== "land" ? (
        <div className="flex gap-5 mb-2">
          <div>
            <p className="text-sm text-dark2">Bedroom</p>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <GiBed className="text-xl" /> {property.bedrooms}
            </p>
          </div>
          <div>
            <p className="text-sm text-dark2">Bathroom</p>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <GiBathtub className="text-xl" /> {property.bathrooms}
            </p>
          </div>

          <div>
            <p className="text-sm text-dark2">House Size</p>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <MdFormatSize className="text-xl" /> {property.size}
            </p>
          </div>
          {property?.floorSize && (
            <div>
              <p className="text-sm text-dark2">Floor Size</p>
              <p className="flex items-center gap-2 text-sm text-dark font-[500]">
                <MdFormatSize className="text-xl" /> {property.floorSize}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-5 mb-2">
          <div>
            <p className="text-sm text-dark2">Land Size</p>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <MdFormatSize className="text-xl" /> {property.size}
            </p>
          </div>
        </div>
      )}
      {/* <TextRed to="#">View details of room types and prices.</TextRed> */}

      {/* Location */}
      <div>
        <p className="text-sm text-dark2 mt-4">Location</p>
        <p className="flex items-center gap-1 text-sm text-dark font-[500]">
          <MdLocationOn className="text-xl" />
          {property.city} , {property.province}
        </p>
        {/* <p className="text-xs text-dark2 mb-3">{property.address}</p> */}
        {/* <TextRed to="/">open map</TextRed> */}
      </div>
      <Divider className="bg-dark2/50" />
    </div>
  );
};

export default Overview;
