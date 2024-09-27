import { useEffect, useState, useRef } from 'react';
import AllResidentialDropdown from '../../components/AllResidentialDropdown';
import AnyPrice from '../../components/AnyPriceDropdown';
import BedroomDropdown from '../../components/BedroomDropdown';
import ToggleButton from '../../components/Home-components/ToggleButton';
import axios from 'axios';
import { useUserContext } from '../../providers/AuthProvider';
import { footer1Items } from '../../constants/footerItem';
import { useNavigate } from 'react-router-dom';

const SearchLocation = () => {
  const {
    handleSearchvalue,
    handleCategory,
    searchvalue,
    bedroomsSelected,
    setBedroomsSelected,
  } = useUserContext();

  const [propertyType, setPropertyType] = useState('residential');
  const [footer1Open, setFooter1Open] = useState(false);
  const [footer2Open, setFooter2Open] = useState(false);
  const [footer3Open, setFooter3Open] = useState(false);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const searchRef = useRef(null);
  const [isBuy, setIsBuy] = useState(true);
  const navigate = useNavigate();
  const [value, setValue] = useState('Property type');

  const bedRoomSizes = ['1', '2', '3', '4', '5'];

  // Handle clicking outside of the search box
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchRef]);

  useEffect(() => {
    handleSearchvalue({
      location: search,
      propertyType: value.toLowerCase(),
      bedrooms: bedroomsSelected,
    });
  }, [search, value, bedroomsSelected]);

  useEffect(() => {
    if (search.trim() !== '') {
      axios
        .get(`/get/search/${search}`)
        .then((response) => setSuggestions(response.data))
        .catch((error) => console.error(error));
    } else {
      setSuggestions([]);
    }
  }, [search]);

  const handleSearch = (location) => {
    if (search) {
      const query = typeof location === 'string' ? location : search;
      setSearch(query);
      handleCategory('');
      // navigate(`/property-for-sale?location=${query}`);
    } else {
      alert('Please Enter City or district in the search box');
    }
  };

  const handleSearchProperty = () => {
    if (!search) {
      return alert('Please Enter location in the search box');
    }
    const filteredSearchValue = Object.fromEntries(
      Object.entries(searchvalue).filter(
        ([key, value]) => value && value !== 'property type'
      )
    );

    const searchParams = new URLSearchParams(filteredSearchValue).toString();

    navigate(`/property-for-sale?${searchParams}`);
  };

  const handleDropdownToggle = (footer, stateSetter) => {
    setFooter1Open(footer === 'footer1' ? !footer1Open : false);
    setFooter2Open(footer === 'footer2' ? !footer2Open : false);
    setFooter3Open(footer === 'footer3' ? !footer3Open : false);
    stateSetter && stateSetter(true);
  };

  return (
    <div className='sm:absolute sm:-bottom-24 sm:left-1/2 transform sm:-translate-x-1/2 lg:w-1/3 md:w-1/2 w-full mx-auto bg-dark bg-opacity-80 p-5 text-white md:rounded-lg'>
      <ToggleButton isBuy={isBuy} setIsBuy={setIsBuy} />

      <div className='flex justify-center'>
        <div className='relative inline-block w-full' ref={searchRef}>
          <input
            type='text'
            className='bg-white text-dark focus:outline-none p-3 rounded-l-md w-full'
            placeholder='Search province,city or location'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsActive(true);
            }}
          />
          {isActive && search.length > 0 && (
            <ul className='absolute top-full left-0 w-full border border-solid border-gray-300 bg-white rounded-b-md shadow-md z-10 font-serif max-h-72 overflow-y-auto'>
              {suggestions?.map((suggestion, index) => {
                const parts = suggestion?.location?.split(
                  new RegExp(`(${search})`, 'gi')
                );

                return (
                  <li
                    key={index}
                    className='hover:bg-gray-100 text-gray-500 flex items-center p-4 border-b border-solid border-gray-300 cursor-pointer'
                    onClick={() => {
                      setSearch(suggestion?.location);
                      handleSearch(suggestion?.location);
                      setIsActive(false);
                    }}
                  >
                    <svg
                      className='w-3 h-3 text-gray-500 mr-3 mb-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 2C7.48 2 4 5.48 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.52-3.48-8-8-8z'
                      />
                      <circle cx='12' cy='10' r='3' />
                    </svg>
                    <span className='flex-grow'>
                      {parts?.map((part, i) =>
                        part.toLowerCase() === search.toLowerCase() ? (
                          <span key={i} className='text-red-500'>
                            {part}
                          </span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                      <span className='text-sm text-gray-500 block'>
                        {suggestion?.province}
                      </span>
                    </span>
                    <h1>{suggestion?.city}</h1>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <button
          onClick={handleSearchProperty}
          className='bg-danger p-3 rounded-r-md'
          type='submit'
        >
          Search
        </button>
      </div>

      <div className='text-sm mt-5 flex items-center gap-5 justify-center'>
        <AllResidentialDropdown
          footer1Handler={() => handleDropdownToggle('footer1')}
          footer1Items={footer1Items}
          footer1Open={footer1Open}
          propertyType={propertyType}
          radioHandler={(e) => {
            setFooter1Open(true);
            setValue(e.target.value);
          }}
          value={value}
          setValue={setValue}
          setPropertyType={setPropertyType}
          closeAllDropdowns={() => handleDropdownToggle()}
        />
        <AnyPrice
          footer2Handler={() => handleDropdownToggle('footer2')}
          footer2Open={footer2Open}
          closeAllDropdowns={() => handleDropdownToggle()}
        />
        {value !== 'land' && (
          <BedroomDropdown
            bedRoomSizes={bedRoomSizes}
            bedroomsSelected={bedroomsSelected}
            footer3Handler={() => handleDropdownToggle('footer3')}
            footer3Open={footer3Open}
            setBedroomsSelected={setBedroomsSelected}
            closeAllDropdowns={() => handleDropdownToggle()}
          />
        )}
      </div>
    </div>
  );
};

export default SearchLocation;
