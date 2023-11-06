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
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  console.log(property)
  const { propertyProfile, propertyTitle, location, detailInformation,_id } = property;
  const {address,state,city,country} = location;
  const {bedrooms,bathrooms ,area ,startPrice} = detailInformation;
  return (
    <Link to={`/property/projects/${_id}`} className="bg-white w-full md:w-4/6">
      <img src={propertyProfile} alt="property_cover" className="rounded-t-lg w-full h-[250px] object-cover" />
      <div className="p-2">
        <h1 className="mt-3 font-semibold text-xl">{propertyTitle}</h1>
        <h1 className="text-xs">{address},{state},{city},{country}</h1>
        <h1 className="flex items-center gap-2">
          ฿ {startPrice}{" "}
          <span className="text-xs bg-dark2/10 py-1 px-3 rounded">
            starting from
          </span>
        </h1>
        <div className="flex gap-5 my-2">
          <div>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <GiBed className="text-xl" /> {bedrooms}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <GiBathtub className="text-xl" /> {bathrooms}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm text-dark font-[500]">
              <RiCommunityFill className="text-xl" /> {area} sq.m.
            </p>
          </div>
        </div>
        {/* <div className="bg-dark2/10 p-2 flex items-center justify-between">
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
        </div> */}
      </div>
    </Link>
  );
};

export default PropertyCard;
