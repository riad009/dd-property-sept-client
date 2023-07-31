import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const SearchLocation = () => {
  const [footer1Open, setFooter1Open] = useState(false);

  return (
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 lg:w-1/3 md:w-1/2 mx-auto bg-dark bg-opacity-80 p-5 text-white rounded-lg">
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
      <div className="mt-5 flex items-center justify-center">
        <h6
          onClick={() => setFooter1Open(!footer1Open)}
          className="flex items-center gap-1 cursor-pointer relative"
        >
          All Residential
          {footer1Open ? <BiChevronUp /> : <BiChevronDown />}
          {footer1Open && (
            <div className="text-dark absolute shadow-md rounded-lg top-7 left-0 bg-white p-3">
              Property Type
              <div className="flex text-sm gap-2 mt-3">
                <h6 className="bg-danger bg-opacity-10 text-danger py-1 px-3 rounded-full">
                  Residential
                </h6>
                <h6 className="bg-dark bg-opacity-10 text-dark py-1 px-3 rounded-full">
                  Commertial
                </h6>
              </div>
            </div>
          )}
        </h6>
      </div>
    </div>
  );
};

export default SearchLocation;
