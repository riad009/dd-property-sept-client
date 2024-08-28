import React from "react";
import { BiCheck } from "react-icons/bi";

const Amenities = ({ property }) => {
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-semibold mb-2">Amenities</h1>
      <div className="shadow-md p-5 mb-10 grid grid-cols-2 gap-4 ">
        {property?.amenities?.map((am, i) => (
          <p
            key={i}
            className="inline-flex items-center gap-2 border-b border-gray-100"
          >
            <BiCheck />
            {am}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
