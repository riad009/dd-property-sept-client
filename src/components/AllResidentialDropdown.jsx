import React from 'react';
import { Checkbox } from "antd";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "./ApplyFilterButtons";

const PropertyTypeHeader = ({ propertyType, setPropertyType }) => (
  <div className="p-3">
    <h1 className="text-dark">Property Type</h1>
    <div className="flex gap-2 mt-3">
      {["residential", "commercial"].map((type) => (
        <h6
          key={type}
          onClick={() => setPropertyType(type)}
          className={`cursor-pointer py-1 px-3 rounded-full ${propertyType === type
            ? "bg-danger bg-opacity-10 text-danger"
            : "bg-dark bg-opacity-10 text-dark"
            }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h6>
      ))}
    </div>
  </div>
);

const FooterItem = ({ item, value, radioHandler, checkBoxHandler }) => (
  <div key={item.key}>
    <label
      className={`p-3 w-full flex items-center mb-2 cursor-pointer ${item.label === value && "bg-dark2"}`}
    >
      <input
        type="radio"
        value={item.label}
        checked={item.label === value}
        onChange={(e) => {
          radioHandler(e);
          if (item.options) {
            checkBoxHandler(item.options);
          }
        }}
        className="form-radio h-5 w-5 text-blue-600"
      />
      <span
        className={`ml-2 ${item.label === value ? "text-dark" : "text-dark"}`}
      >
        {item.label}
      </span>
    </label>
    {item.label === value && item.options && (
      <Checkbox.Group
        className="px-10"
        style={{ width: "100%" }}
        value={item.options}
        onChange={checkBoxHandler}
      >
        {item.options.map((option, index) => (
          <Checkbox key={index} value={option} className="text-black ">
            {option}
          </Checkbox>
        ))}
      </Checkbox.Group>
    )}
  </div>
);

const AllResidentialDropdown = ({
  footer1Handler,
  footer1Open,
  propertyType,
  setPropertyType,
  footer1Items,
  radioHandler,
  checkBoxHandler,
  value,
  border,
  hideFooter,
  setValue,
  closeAllDropdowns
}) => {
  console.log({ footer1Items })
  return (
    <div className={`relative ${border && "bg-white w-fit p-2 rounded-md"}`}>
      <h6
        onClick={footer1Handler}
        className={`flex items-center gap-1 cursor-pointer ${hideFooter
          ? "rounded-[8px] border border-[lightgray] h-[40px] pl-2"
          : ""
          }`}
      >
        {value}
        {footer1Open ? <BiChevronUp /> : <BiChevronDown />}
      </h6>
      {footer1Open && (
        <div
          className={`absolute shadow-md rounded-lg ${border ? "top-12 shadow-lg" : "top-7"
            } left-0 bg-white`}
        >
          <PropertyTypeHeader
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
          <div className="overflow-scroll h-52 overflow-x-hidden w-80 bg-dark2 bg-opacity-5">
            {footer1Items.map((item) => (
              <FooterItem
                key={item.key}
                item={item}
                value={value}
                radioHandler={radioHandler}
                checkBoxHandler={checkBoxHandler}
              />
            ))}
          </div>
          {!hideFooter && <ApplyFilterButtons closeAllDropdowns={closeAllDropdowns} setValue={setValue} />}
        </div>
      )}
    </div>
  );
};

export default AllResidentialDropdown;
