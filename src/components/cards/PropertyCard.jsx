import React from "react";
import { GiBathtub, GiBed } from "react-icons/gi";
import { RiCommunityFill } from "react-icons/ri";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdMessage,
  MdRestore,
  MdWhatsapp,
} from "react-icons/md";

const PropertyCard = ({ property }) => {
  const { image, title, location, startingPrice, listedBy, companyLogo } =
    property;
  return (
    <div className="bg-white w-full md:w-4/6">
      <img src={image} alt="property_cover" className="rounded-t-lg w-full" />
      <div className="p-2">
        <h1 className="mt-3 font-semibold text-xl">{title}</h1>
        <h1 className="text-xs">{location}</h1>
        <h1 className="flex items-center gap-2">
          ฿ {startingPrice}{" "}
          <span className="text-xs bg-dark2/10 py-1 px-3 rounded">
            starting from
          </span>
        </h1>
        <div className="flex gap-5 my-2">
          <div>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <GiBed className="text-xl" /> 3,4
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <GiBathtub className="text-xl" /> 3,5
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <RiCommunityFill className="text-xl" /> 123 sq.m. - 236 sq.m.
            </p>
          </div>
        </div>
        <div className="bg-dark2/10 p-2 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={companyLogo}
              alt="company_logo"
            />
            <div>
              <p className="text-xs">Added By</p>
              <h1>{listedBy}</h1>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-1 border border-dark bg-white px-4 rounded">
              <MdWhatsapp />
              Line
            </div>
            <MdRestore className="text-2xl rounded border bg-white border-dark p-1" />
            <MdFavoriteBorder className="text-2xl rounded border bg-white border-dark p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
