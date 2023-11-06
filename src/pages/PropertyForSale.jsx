import { useEffect, useState } from "react";
import AllResidentialDropdown from "../components/AllResidentialDropdown";
import SmallContainer from "../shared/SmallContainer";
import AnyPrice from "../components/AnyPriceDropdown";
import BedroomDropdown from "../components/BedroomDropdown";
import Search from "antd/es/input/Search";
import TextRed from "../components/TextRed";
import { Switch } from "antd";
import PropertyCard from "../components/cards/PropertyCard";
import { useLocation } from "react-router-dom";
import { NoDataFound } from "../components/NoDataFound";

const PropertyForSale = () => {
  // const [propertyType, setPropertyType] = useState("residential");
  const [footer1Open, setFooter1Open] = useState(false);
  const [footer2Open, setFooter2Open] = useState(false);
  const [footer3Open, setFooter3Open] = useState(false);
  const bedRoomSizes = ["Studio", "1", "2", "3", "4", "5+"];
  const [properties,setProperties]=useState([])
  // my code
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type")
  const rooms = queryParams.get("rooms")
  const search = queryParams.get("search")
  const [searchText,setSearchText]=useState(search)
  const [room,setRooms]= useState(rooms)
  const [propertyType,setPropertyType]=useState(type)

  

  useEffect(()=>{
    fetch(`https://dd-property-server.vercel.app/property?search=${searchText}&type=${propertyType}&rooms=${room}`)
    .then(res=>res.json())
    .then(data=>setProperties(data))
  },[searchText,propertyType,room])



  const [map, setMap] = useState(false);

  const handleType =(event)=>{
    const selectedValue = event.target.value;
    setPropertyType(selectedValue)
  }

  const handleRooms =(event)=>{
    const selectedValue = event.target.value;
    setRooms(selectedValue)
  }

  const handleSearch =(event)=>{
    const selectedValue = event.target.value;
    setSearchText(selectedValue)
  }
  

  return (
    <div className="p-10 bg-dark2/5">
      <SmallContainer>
        <div className="bg-white/10 p-2 md:flex items-center gap-4 mb-10">
        <input onChange={handleSearch} type="text" placeholder="city" className="input input-bordered input-md w-full " />
          <div className="flex items-center gap-4 mt-3 md:mt-0">
            <select onChange={handleType} className="select py-0 select-bordered">
              <option className="text-black" disabled selected>property Type</option>
              <option value={"condo"} className="text-black">condo</option>
              <option value={"land"} className="text-black">land</option>
              <option value={"detached house"} className="text-black">detached houe</option>
              <option value={"town house"} className="text-black">town house</option>
              <option value={"aparment"} className="text-black">aparment</option>
            </select>
            <select onChange={handleRooms} className="select py-0 select-bordered">
              <option className="text-black" disabled selected>room</option>
              <option value={1} className="text-black">1</option>
              <option value={2} className="text-black">2</option>
              <option value={3} className="text-black">3</option>
              <option value={5} className="text-black">5</option>
            </select>
          </div>
        </div>
        <div className="flex items-center my-5 justify-between">
          <p>
            {properties && properties?.length} Results of Property For Sale in Thailand{" "}
            <TextRed>Create Alert.</TextRed>
          </p>
          <Switch
            checked={map}
            className="bg-black"
            onChange={() => setMap(!map)}
          />
        </div>

        {/* <div className="flex gap-2 my-5">
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
        </div> */}

        <div>
          <div className="flex flex-col gap-5">
            {properties.length==0? <NoDataFound/> :properties.map((property) => (
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
