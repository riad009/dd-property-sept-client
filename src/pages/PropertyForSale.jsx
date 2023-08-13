import { useState } from "react";
import AllResidentialDropdown from "../components/AllResidentialDropdown";
import SmallContainer from "../shared/SmallContainer";
import AnyPrice from "../components/AnyPriceDropdown";
import BedroomDropdown from "../components/BedroomDropdown";
import Search from "antd/es/input/Search";
import TextRed from "../components/TextRed";
import { Switch } from "antd";
import PropertyCard from "../components/cards/PropertyCard";

const PropertyForSale = () => {
  const [propertyType, setPropertyType] = useState("residential");
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

  const minPriceHandler = (e) => {
    console.log(e.target.value);
  };

  const maxPriceHandler = (e) => {
    console.log(e.target.value);
  };

  const [map, setMap] = useState(false);
  const [filterOption, setFilterOption] = useState("All");

  const properties = [
    {
      image:
        "https://th1-cdn.pgimgs.com/project-listing-project/10776592/PLPHO.115004197.R400X300/Home-Sweet-Home-The-Forest-Muang-Chon-Buri-Thailand.jpg",
      title: "Home Sweet Home The Forest, Chon Buri",
      location: "Lorem ipsum dolor sit amet",
      startingPrice: 13500000,
      bedRoom: 4,
      bathRoom: 5,
      size: 316,
      tags: ["New Project", "townhouse", "singlehouse"],
      postedAt: "4h",
      listedBy: "Home sweet Home Estate",
      companyLogo:
        "https://th1-cdn.pgimgs.com/agent/15851271/APHO.116495626.V120B.jpg",
    },
    {
      image:
        "https://th1-cdn.pgimgs.com/project-listing-project/10776592/PLPHO.115004197.R400X300/Home-Sweet-Home-The-Forest-Muang-Chon-Buri-Thailand.jpg",
      title: "Home Sweet Home The Forest, Chon Buri",
      location: "Lorem ipsum dolor sit amet",
      startingPrice: 13500000,
      bedRoom: 4,
      bathRoom: 5,
      size: 316,
      tags: ["New Project", "townhouse", "singlehouse"],
      postedAt: "4h",
      listedBy: "Home sweet Home Estate",
      companyLogo:
        "https://th1-cdn.pgimgs.com/agent/15851271/APHO.116495626.V120B.jpg",
    },
  ];

  return (
    <div className="p-10 bg-dark2/5">
      <SmallContainer>
        <div className="bg-white/10 p-2 md:flex items-center gap-4 mb-10">
          <Search
            placeholder="input search text"
            allowClear
            size="large"
            className="flex-1"
          />
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <AllResidentialDropdown
              border
              footer1Handler={footer1Handler}
              footer1Items={footer1Items}
              footer1Open={footer1Open}
              propertyType={propertyType}
              radioHandler={radioHandler}
              value={value}
              setPropertyType={setPropertyType}
            />
            <AnyPrice
              footer2Handler={footer2Handler}
              footer2Open={footer2Open}
              maxPriceHandler={maxPriceHandler}
              minPriceHandler={minPriceHandler}
              border
            />
            {/* Footer 3 */}
            <BedroomDropdown
              bedRoomSizes={bedRoomSizes}
              bedroomsSelected={bedroomsSelected}
              footer3Handler={footer3Handler}
              footer3Open={footer3Open}
              handleBedroomSizeFilter={handleBedroomSizeFilter}
              border
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>
            93,018 Results of Property For Sale in Thailand{" "}
            <TextRed>Create Alert.</TextRed>
          </p>
          <Switch
            checked={map}
            className="bg-black"
            onChange={() => setMap(!map)}
          />
        </div>

        <div className="flex gap-2 my-5">
          <FilterOption
            setFilterOption={setFilterOption}
            text={"All"}
            seleted={filterOption === "All"}
          />
          <FilterOption
            setFilterOption={setFilterOption}
            seleted={filterOption === "New Project"}
            text={"New Project"}
          />

          <FilterOption
            setFilterOption={setFilterOption}
            seleted={filterOption === "Verified Agent Listing"}
            text={"Verified Agent Listing"}
          />
        </div>

        <div>
          <div className="flex flex-col gap-5">
            {properties.map((property) => (
              <PropertyCard property={property} />
            ))}
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default PropertyForSale;

const FilterOption = ({ text, seleted, setFilterOption }) => (
  <div
    onClick={() => setFilterOption(text)}
    className={`${
      seleted ? "bg-danger/10 text-danger" : "bg-dark2/10 text-dark"
    } py-1 px-6 rounded-full`}
  >
    {text}
  </div>
);
