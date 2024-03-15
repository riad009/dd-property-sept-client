import { Checkbox } from "antd";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "./ApplyFilterButtons";

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
}) => {
  return (
    <div className={`relative ${border && "bg-white w-fit p-2 rounded-md"}`}>
      {!hideFooter ? (
        <h6
          onClick={footer1Handler}
          className="flex items-center gap-1 cursor-pointer"
        >
          {value}
          {footer1Open ? <BiChevronUp /> : <BiChevronDown />}
        </h6>
      ) : (
        <h6
          onClick={footer1Handler}
          className="flex items-center gap-1 cursor-pointer rounded-[8px] border border-[lightgray] h-[40px] pl-2"
        >
          {value}
          {footer1Open ? <BiChevronUp /> : <BiChevronDown />}
        </h6>
      )}
      {footer1Open && (
        <div
          className={`absolute shadow-md rounded-lg ${
            border ? "top-12 shadow-lg" : "top-7"
          } left-0 bg-white`}
        >
          <div className="p-3">
            <h1 className="text-dark">Property Type</h1>
            <div className="flex gap-2 mt-3">
              {/* Footer Header */}
              <h6
                onClick={() => setPropertyType("residential")}
                className={`${
                  propertyType === "residential"
                    ? "bg-danger bg-opacity-10 text-danger"
                    : "bg-dark bg-opacity-10 text-dark"
                } cursor-pointer  py-1 px-3 rounded-full`}
              >
                Residential
              </h6>
              <h6
                onClick={() => setPropertyType("commercial")}
                className={`${
                  propertyType === "commercial"
                    ? "bg-danger bg-opacity-10 text-danger"
                    : "bg-dark bg-opacity-10 text-dark"
                } cursor-pointer  py-1 px-3 rounded-full`}
              >
                Commertial
              </h6>
            </div>
          </div>
          {/* Footer Body */}
          {/* Footer Items */}
          <div className="overflow-scroll h-52 overflow-x-hidden w-80 bg-dark2 bg-opacity-5">
            {footer1Items.map((item) => (
              <div key={item.key}>
                <label
                  className={`p-3 w-full flex items-center mb-2 cursor-pointer ${
                    item.label === value && "bg-dark2"
                  }`}
                >
                  <input
                    type="radio"
                    value={item.label}
                    checked={item.label === value}
                    onChange={radioHandler}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span
                    className={`ml-2 ${
                      item.label === value ? "text-white" : "text-dark"
                    }`}
                  >
                    {item.label}
                  </span>
                </label>
                {item.label === value && item.options && (
                  <Checkbox.Group
                    className="px-10"
                    style={{ width: "100%" }}
                    onChange={checkBoxHandler}
                  >
                    {item.options?.map((option, index) => (
                      <Checkbox value="A">{option}</Checkbox>
                    ))}
                  </Checkbox.Group>
                )}
              </div>
            ))}
          </div>
          {/* Footer Footer */}
          {/* Footer Footer */}
          {!hideFooter && <ApplyFilterButtons />}
        </div>
      )}
    </div>
  );
};

export default AllResidentialDropdown;
