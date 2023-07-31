import { Button, Checkbox, Divider, Input, Space } from "antd";
import { useState } from "react";
import { BoldOutlined } from "@ant-design/icons";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "../../components/ApplyFilterButtons";

const SearchLocation = () => {
  const [footer1Open, setFooter1Open] = useState(false);
  const [footer2Open, setFooter2Open] = useState(false);
  const [footer3Open, setFooter3Open] = useState(false);
  const bedRoomSizes = ["Studio", "1", "2", "3", "4", "5+"];

  const [bedroomsSelected, setBedroomsSelected] = useState([]);

  const handleBedroomSizeFilter = (option) => {
    if (bedroomsSelected.includes(option)) {
      setBedroomsSelected(
        bedroomsSelected.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setBedroomsSelected([...bedroomsSelected, option]);
    }
  };

  const footer1Handler = () => {
    setFooter1Open(!footer1Open);
    setFooter2Open(false);
    setFooter3Open(false);
  };

  const footer2Handler = () => {
    setFooter1Open(false);
    setFooter2Open(!footer2Open);
    setFooter3Open(false);
  };

  const footer3Handler = () => {
    setFooter1Open(false);
    setFooter2Open(false);
    setFooter3Open(!footer3Open);
  };

  const footer1Items = [
    {
      key: 0,
      label: "All Residential",
    },
    {
      key: 1,
      label: "Condo",
      options: ["Condo"],
    },
    {
      key: 2,
      label: "Detached House",
      options: ["Detached House"],
    },
    {
      key: 3,
      label: "Town House",
      options: ["Town House"],
    },
    {
      key: 4,
      label: "land",
      options: ["Land"],
    },
    {
      key: 5,
      label: "Apartment",
      options: ["Apartment"],
    },
  ];

  const [value, setValue] = useState("All Residential");
  const radioHandler = (e) => {
    setFooter1Open(true);
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const checkBoxHandler = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 lg:w-1/3 md:w-1/2 mx-auto bg-dark bg-opacity-80 p-5 text-white rounded-lg">
      {/* Navbar */}
      <div className="flex w-fit mx-auto gap-5 text-xl mb-5">
        <h1 className="cursor-pointer border-b-2 border-danger">Buy</h1>
        <h1 className="cursor-pointer ">Rent</h1>
      </div>
      {/* Search Field */}
      <div className="flex justify-center">
        <input
          type="text"
          className="bg-white p-3 rounded-l-md w-full"
          placeholder="Search Location"
        />
        <button className="bg-danger p-3 rounded-r-md" type="submit">
          Search
        </button>
      </div>
      {/* Footer */}
      <div className="mt-5 flex items-center gap-5 justify-center">
        {/* Footer 1 */}
        <h6
          onClick={footer1Handler}
          className="flex items-center gap-1 cursor-pointer relative"
        >
          All Residential
          {footer1Open ? <BiChevronUp /> : <BiChevronDown />}
          {footer1Open && (
            <div className="absolute shadow-md rounded-lg top-7 left-0 bg-white">
              <div className="p-3">
                <h1 className="text-dark text-sm">Property Type</h1>
                <div className="flex text-sm gap-2 mt-3">
                  {/* Footer Header */}
                  <h6 className="bg-danger bg-opacity-10 text-danger py-1 px-3 rounded-full">
                    Residential
                  </h6>
                  <h6 className="bg-dark bg-opacity-10 text-dark py-1 px-3 rounded-full">
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
              <div className="text-dark flex justify-between items-center p-5 text-sm">
                <h6>Clear</h6>
                <Button className="bg-dark2 text-white h-10">
                  Apply Filter
                </Button>
              </div>
            </div>
          )}
        </h6>
        {/* Footer 2 */}
        <h6
          onClick={footer2Handler}
          className="flex items-center gap-1 cursor-pointer relative"
        >
          Any Price
          {footer2Open ? <BiChevronUp /> : <BiChevronDown />}
          {footer2Open && (
            <div className="absolute shadow-md rounded-lg top-7 left-0 bg-white w-96">
              <div className="p-3">
                <h1 className="text-dark text-sm">Price</h1>
                <div className="flex text-sm gap-5 mt-5">
                  {/* Footer Header */}
                  <Space.Compact size="large">
                    <Input
                      addonBefore={<BoldOutlined />}
                      placeholder="Min Price"
                    />
                  </Space.Compact>
                  <Space.Compact size="large">
                    <Input
                      addonBefore={<BoldOutlined />}
                      placeholder="Max Price"
                    />
                  </Space.Compact>
                </div>
              </div>
              <Divider />
              {/* Footer Footer */}
              <ApplyFilterButtons />
            </div>
          )}
        </h6>

        {/* Footer 3 */}
        <h6
          onClick={footer3Handler}
          className="flex items-center gap-1 cursor-pointer relative"
        >
          Bedroom
          {footer3Open ? <BiChevronUp /> : <BiChevronDown />}
          {footer3Open && (
            <div className="absolute shadow-md rounded-lg top-7 right-0 bg-white w-96">
              <div className="p-3">
                <h1 className="text-dark text-sm">Bedroom</h1>
                <div className="flex flex-wrap gap-5 mt-5 text-dark">
                  {bedRoomSizes.map((option) => (
                    <div
                      key={option}
                      className={`px-4 py-1 border rounded-lg cursor-pointer ${
                        bedroomsSelected.includes(option) &&
                        "bg-dark text-white"
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
        </h6>
      </div>
    </div>
  );
};

export default SearchLocation;
