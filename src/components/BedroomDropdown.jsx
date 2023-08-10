import { Divider } from "antd";
import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "./ApplyFilterButtons";

const BedroomDropdown = ({
  footer3Handler,
  footer3Open,
  bedRoomSizes,
  bedroomsSelected,
  handleBedroomSizeFilter,
  border,
}) => {
  return (
    <div className={`relative ${border && "bg-white w-fit p-2 rounded-md"}`}>
      <h6
        onClick={footer3Handler}
        className="flex items-center gap-1 cursor-pointer"
      >
        Bedroom
        {footer3Open ? <BiChevronUp /> : <BiChevronDown />}
      </h6>
      {footer3Open && (
        <div
          className={`absolute shadow-md rounded-lg ${
            border ? "top-12 shadow-lg" : "top-7"
          } right-0 bg-white w-80`}
        >
          <div className="p-3">
            <h1 className="text-dark text-sm">Bedroom</h1>
            <div className="flex flex-wrap gap-5 mt-5 text-dark">
              {bedRoomSizes.map((option) => (
                <div
                  key={option}
                  className={`px-4 py-1 border rounded-lg cursor-pointer ${
                    bedroomsSelected.includes(option) && "bg-dark text-white"
                  } border border-dark`}
                  onClick={() => handleBedroomSizeFilter(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          <Divider />
          {/* Footer Footer */}
          <ApplyFilterButtons />
        </div>
      )}
    </div>
  );
};

export default BedroomDropdown;
