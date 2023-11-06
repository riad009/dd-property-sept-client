import { Divider, InputNumber } from "antd";
import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "../../components/ApplyFilterButtons";
import AllResidentialDropdown from "../../components/AllResidentialDropdown";
import AnyPrice from "../../components/AnyPriceDropdown";
import BedroomDropdown from "../../components/BedroomDropdown";
import { Link } from "react-router-dom";

const SearchLocation = () => {
  const [propertyType, setPropertyType] = useState("residential");
  const [footer1Open, setFooter1Open] = useState(false);
  const [footer2Open, setFooter2Open] = useState(false);
  const [footer3Open, setFooter3Open] = useState(false);
  const bedRoomSizes = ["Studio", "1", "2", "3", "4", "5+"];
  const [type , setType]=useState("")
  const [rooms, setRooms] = useState("")
  const [search,setsearch] = useState("")

  const handleRooms =(event)=>{
    const selectedValue = event.target.value;
    setRooms(selectedValue);
  }
  const handleType =(event)=>{
    const selectedValue = event.target.value;
    setType(selectedValue);
  }
  const handleSearch = (event) =>{
    const SearchValue = event.target.value;
    setsearch(SearchValue)
  }

  

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
          onChange={handleSearch}
          type="text"
          className="bg-white text-dark focus:outline-none p-3 rounded-l-md w-full"
          placeholder="Search City"
        />
        <Link to={`/property-for-sale?type=${type}&rooms=${rooms}&search=${search}`} className="bg-danger p-3 rounded-r-md" type="submit">
          Search
        </Link>
      </div>
      {/* Footer */}
      <div className="text-sm mt-5 flex items-center gap-5 justify-center">
        <select onChange={handleType} className="select py-0 select-bordered border-0">
          <option className="text-black" disabled selected>property Type</option>
          <option value={"condo"} className="text-black">condo</option>
          <option value={"land"} className="text-black">land</option>
          <option value={"detached house"} className="text-black">detached houe</option>
          <option value={"town house"} className="text-black">town house</option>
          <option value={"aparment"} className="text-black">aparment</option>
        </select>
        <select onChange={handleRooms} className="select py-0 select-bordered border-0">
          <option className="text-black" disabled selected>room</option>
          <option value={1} className="text-black">1</option>
          <option value={2} className="text-black">2</option>
          <option value={3} className="text-black">3</option>
          <option value={5} className="text-black">5</option>
        </select>
        {/* Footer 1 */}
        {/* <AllResidentialDropdown
          footer1Handler={footer1Handler}
          footer1Items={footer1Items}
          footer1Open={footer1Open}
          propertyType={propertyType}
          radioHandler={radioHandler}
          value={value}
          setPropertyType={setPropertyType}
          checkBoxHandler={checkBoxHandler}
        /> */}
        {/* Footer 2 */}
        {/* <AnyPrice
          footer2Handler={footer2Handler}
          footer2Open={footer2Open}
          maxPriceHandler={maxPriceHandler}
          minPriceHandler={minPriceHandler}
        /> */}
        {/* Footer 3 */}
        {/* <BedroomDropdown
          bedRoomSizes={bedRoomSizes}
          bedroomsSelected={bedroomsSelected}
          footer3Handler={footer3Handler}
          footer3Open={footer3Open}
          handleBedroomSizeFilter={handleBedroomSizeFilter}
        /> */}
      </div>
    </div>
  );
};

export default SearchLocation;
