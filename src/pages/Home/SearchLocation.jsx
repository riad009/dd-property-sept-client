import { Divider, InputNumber } from "antd";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "../../components/ApplyFilterButtons";
import AllResidentialDropdown from "../../components/AllResidentialDropdown";
import AnyPrice from "../../components/AnyPriceDropdown";
import BedroomDropdown from "../../components/BedroomDropdown";

const SearchLocation = () => {
  const [propertyType, setPropertyType] = useState("residential");
  const [footer1Open, setFooter1Open] = useState(false);
  const [footer2Open, setFooter2Open] = useState(false);
  const [footer3Open, setFooter3Open] = useState(false);
  const bedRoomSizes = ["Studio", "1", "2", "3", "4", "5+"];
  const [bedroomsSelected, setBedroomsSelected] = useState([]);
  const [filterProperty,setFilterProperty] = useState('All Residential')
  const [value, setValue] = useState("All Residential");
  const [filterBedRoom,setFilterBedRoom]=useState(null)
  const [minPrice,setMinPrice]=useState('')
  const [maxPrice,setMaxPrice]=useState('')
  const [filterPrice,setFilterPrice]=useState(null)
  const handleApplyFilterProperty=()=>{
    setFilterProperty('')
    setFilterProperty(value)
    setFooter1Open(false)
  }
  const handleClearProperty =()=>{
    setFilterProperty('')
    setFilterProperty('All Residential')
    setValue('All Residential')
    setFooter1Open(false)
  }
  const handleApplyFilterBedRoom =()=>{
    setFilterBedRoom(bedroomsSelected)
    setFooter3Open(false)
  }
  const handleClearBedroom =()=>{
    setFilterBedRoom(null)
    setFooter3Open(false)
    setBedroomsSelected([])
  }
  console.log(minPrice,maxPrice)
  const handleApplyFilterPrice=()=>{
    setMaxPrice('')
    setMinPrice('')
    const price = {minPrice,maxPrice}
    setFilterPrice(price)
    setFooter2Open(false)
    if(minPrice==='' && maxPrice ===''){
      setFilterPrice(null)
    }
  }
  const handleClearPrice =()=>{
    setFooter2Open(false)
    setFilterPrice(null)
  }

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

  
  const radioHandler = (e) => {
    setFooter1Open(true);
    setValue(e.target.value);
  };

  const checkBoxHandler = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  
  const minPriceHandler = (event) => {
    setMinPrice(event);
  };
  
  const maxPriceHandler = (e) => {
    setMaxPrice(e);
  };
  
  
  return (
    <div className="sm:absolute sm:-bottom-24 sm:left-1/2 transform sm:-translate-x-1/2 lg:w-1/3 md:w-1/2 w-full mx-auto bg-dark bg-opacity-80 p-5 text-white md:rounded-lg">
      {/* Navbar */}
      <div className="flex w-fit mx-auto gap-5 text-xl mb-5">
        <h1 className="cursor-pointer border-b-2 border-danger">Buy</h1>
        <h1 className="cursor-pointer ">Rent</h1>
      </div>
      {/* Search Field */}
      <div className="flex justify-center">
        <input
          type="text"
          className="bg-white text-dark focus:outline-none p-3 rounded-l-md w-full"
          placeholder="Search Location"
        />
        <button className="bg-danger p-3 rounded-r-md" type="submit">
          Search
        </button>
      </div>
      {/* Footer */}
      <div className="text-sm mt-5 flex items-center gap-5 justify-center">
        {/* Footer 1 */}
        <AllResidentialDropdown
          footer1Handler={footer1Handler}
          footer1Items={footer1Items}
          footer1Open={footer1Open}
          propertyType={propertyType}
          radioHandler={radioHandler}
          value={value}
          setPropertyType={setPropertyType}
          checkBoxHandler={checkBoxHandler}
          filterProperty={filterProperty}
          handleApplyFilterProperty={handleApplyFilterProperty}
          handleClearProperty={handleClearProperty}
        />
        {/* Footer 2 */}
        <AnyPrice
          footer2Handler={footer2Handler}
          footer2Open={footer2Open}
          maxPriceHandler={maxPriceHandler}
          minPriceHandler={minPriceHandler}
          filterPrice={filterPrice}
          handleApplyFilterPrice={handleApplyFilterPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
          handleClearPrice={handleClearPrice}
        />
        {/* Footer 3 */}
        <BedroomDropdown
          bedRoomSizes={bedRoomSizes}
          bedroomsSelected={bedroomsSelected}
          footer3Handler={footer3Handler}
          footer3Open={footer3Open}
          handleBedroomSizeFilter={handleBedroomSizeFilter}
          handleApplyFilterBedRoom={handleApplyFilterBedRoom}
          filterBedRoom={filterBedRoom}
          handleClearBedroom={handleClearBedroom}
        />
      </div>
    </div>
  );
};

export default SearchLocation;
