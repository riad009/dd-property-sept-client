import { Divider, InputNumber } from "antd";
import { useEffect, useState, useRef } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "../../components/ApplyFilterButtons";
import AllResidentialDropdown from "../../components/AllResidentialDropdown";
import AnyPrice from "../../components/AnyPriceDropdown";
import BedroomDropdown from "../../components/BedroomDropdown";
import axios from "axios";
import { useUserContext } from "../../providers/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SearchLocation = () => {

  const { searchvalue, handleSearchvalue,handleCategory } = useUserContext();

 

  console.log('searchvalue', searchvalue)
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

  const [minprice, setminprice] = useState('');
  const [maxprice, setmaxprice] = useState('');

  
  const price =  { maxprice, minprice } 
  
  const minPriceHandler = (e) => {
    setminprice(e)
  };

  const maxPriceHandler = (e) => {
    setmaxprice(e)
  };


  // Search start
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  console.log('suggestions', suggestions)
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  useEffect(() => {
    // Fetch suggestions when the search term changes
    if (search.trim() !== '') {
      axios
        .get(`http://localhost:5000/get/search/${search}`)
        .then((response) => {
          // Update the suggestions based on the backend response
          setSuggestions(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      // Clear suggestions when the search term is empty
      setSuggestions([]);
    }
  }, [search]);

  //  Search button

  const navigate = useNavigate();
  const handleSearch = () => {
    
   if(search){
    handleCategory('')
    navigate(`/property-for-sale`);
 

   }
   else{
    alert("Please Enter City or district in the search box")
   }
     
 

  }

  const [city, setCity] = useState("");

  useEffect(() => {
    handleSearchvalue({city,state:search});
  }, [search]);

  //  Search button

  // Search end
  return (
    <div className="sm:absolute sm:-bottom-24 sm:left-1/2 transform sm:-translate-x-1/2 lg:w-1/3 md:w-1/2 w-full mx-auto bg-dark bg-opacity-80 p-5 text-white md:rounded-lg">
      {/* Navbar */}
      <div className="flex w-fit mx-auto gap-5 text-xl mb-5">
        <h1 className="cursor-pointer border-b-2 border-danger">Buy</h1>
        <h1 className="cursor-pointer ">Rent</h1>
      </div>
      {/* Search Field */}
      <div className="flex justify-center">

        {/*  */}
        <div className="relative inline-block w-full" ref={searchRef}>
          <input
            type="text"
           
            className="bg-white text-dark focus:outline-none p-3 rounded-l-md w-full"
            placeholder="Search City or District"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsActive(true);
            }}
          />
          {isActive && search.length > 0 && (
            <ul className="absolute top-full left-0 w-full border border-solid border-gray-300 bg-white rounded-b-md shadow-md z-10 font-serif max-h-72 overflow-y-auto">
              {suggestions.map((suggestion, index) => {
                // Split the suggestion text into parts before and after the search term
                const parts = suggestion.district.split(new RegExp(`(${search})`, 'gi'));

                return (
                  <li
                    key={index}
                    className="hover:bg-gray-100 text-gray-500 flex items-center p-4 border-b border-solid border-gray-300 cursor-pointer text-black"
                    onClick={() => {
                      setSearch(suggestion.district);
                      setCity(suggestion.city);
                      setIsActive(false); // Close the suggestions after selecting a city
                    }}
                  >
                    {/* SVG Icon */}
                    <svg
                      className="w-3 h-3 text-gray-500 mr-3 mb-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2C7.48 2 4 5.48 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.52-3.48-8-8-8z"
                      />
                      <circle cx="12" cy="10" r="3" />
                    </svg>

                    {/* Property Title */}
                    <span className="flex-grow">
                      <span className="text-gray-600 hover:bg-gray-200">
                        {parts.map((part, i) => (
                          // Highlight the matching part in red
                          part.toLowerCase() === search.toLowerCase() ? (
                            <span key={i} className="text-red-500">
                              {part}
                            </span>
                          ) : (
                            <span key={i}>{part}</span>
                          )
                        ))}
                      </span>

                      {/* Small text below property title */}
                      <span className="text-sm text-gray-500 block">{suggestion.district}</span>
                    </span>

                    <h1 className="">{suggestion.city}</h1>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/*  */}
        <div >
          <button onClick={handleSearch} className="bg-danger p-3 rounded-r-md" type="submit">
            Search
          </button>
        </div>
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
        />
        {/* Footer 2 */}
        <AnyPrice
          footer2Handler={footer2Handler}
          footer2Open={footer2Open}
          maxPriceHandler={maxPriceHandler}
          minPriceHandler={minPriceHandler}
          price={price}
        />
        {/* Footer 3 */}
        <BedroomDropdown
          bedRoomSizes={bedRoomSizes}
          bedroomsSelected={bedroomsSelected}
          footer3Handler={footer3Handler}
          footer3Open={footer3Open}
          handleBedroomSizeFilter={handleBedroomSizeFilter}
          setBedroomsSelected={setBedroomsSelected}
        />
      </div>
    </div>
  );
};

export default SearchLocation;
