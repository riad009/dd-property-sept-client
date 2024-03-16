import { useState } from "react";
import AllResidentialDropdown from "../components/AllResidentialDropdown";
import SmallContainer from "../shared/SmallContainer";
import AnyPrice from "../components/AnyPriceDropdown";
import BedroomDropdown from "../components/BedroomDropdown";
import Search from "antd/es/input/Search";
import TextRed from "../components/TextRed";
import { Switch } from "antd";
import PropertyCard from "../components/cards/PropertyCard";
import { useUserContext } from "../providers/AuthProvider";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const PropertyForSale = () => {
  const { searchvalue, category, bedrooms, pricefilter } = useUserContext();

  const [map, setMap] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  console.log({ searchvalue, category, bedrooms, pricefilter });

  useEffect(() => {
    const apiUrl =
      "https://dd-property-sept-server.vercel.app/get/search/property/new";
    // "http://localhost:5000/get/search/property/new";

    const requestData = {
      searchvalue: JSON.stringify(searchvalue),
      bedrooms: bedrooms,
      maxprice: pricefilter?.maxprice,
      minprice: pricefilter?.minprice,
    };

    // Fetch data only if isDataLoading is true
    if (isDataLoading) {
      // Send the search object to the server using POST method
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the received data
          setSearchResults(data);
          // Set isDataLoading to false after the data is loaded
          setIsDataLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle errors if needed
          setIsDataLoading(false); // Set isDataLoading to false in case of an error
        });
    }
  }, [isDataLoading]); // Dependency array with isDataLoading to run the effect when isDataLoading changes

  // get property

  //category

  const [categoryproperty, setcategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the search object
    const userData = {
      category: category.combinedFields?.category,
      category2: category.combinedFields?.category2,
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dd-property-sept-server.vercel.app/get/categoryproperty/${userData.category}/${userData.category2}`
        );
        const data = await response.json();
        setcategory(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    // Fetch data only on the initial render
    if (loading) {
      fetchData();
    }
  }, [loading]);

  //category

  //loader data

  const property = useLoaderData();

  const length = categoryproperty.length;
  //loader data
  return (
    <div className="p-10 bg-dark2/5">
      <SmallContainer>
        {/* <div className="bg-white/10 p-2 md:flex items-center gap-4 mb-10">
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
           
            <BedroomDropdown
              bedRoomSizes={bedRoomSizes}
              bedroomsSelected={bedroomsSelected}
              footer3Handler={footer3Handler}
              footer3Open={footer3Open}
              handleBedroomSizeFilter={handleBedroomSizeFilter}
              border
            />
          </div>
        </div> */}

        <div className="flex items-center justify-between">
          <p>
            {length > 0 ? (
              <>
                {" "}
                {length} Results of Property For Sale in,{" "}
                {categoryproperty[0]?.category},{" "}
                {categoryproperty[0]?.category2}
              </>
            ) : (
              <> </>
            )}
            {/* <TextRed>     Create Alert.</TextRed> */}
          </p>
          <Switch
            checked={map}
            className="bg-black"
            onChange={() => setMap(!map)}
          />
        </div>

        <div className="flex gap-2 my-5">
          {/* <FilterOption
            setFilterOption={setFilterOption}
            text={"All"}
            seleted={filterOption === "All"}
          /> */}
          {/* <FilterOption
            setFilterOption={setFilterOption}
            seleted={filterOption === "New Project"}
            text={"New Project"}
          /> */}

          {/* <FilterOption
            setFilterOption={setFilterOption}
            seleted={filterOption === "Verified Agent Listing"}
            text={"Verified Agent Listing"}
          /> */}
        </div>

        <div>
          {/* <div className="flex flex-col gap-5">
            {searchResults.map((property) => (
              <PropertyCard property={property} />
            ))}
          </div> */}
          <section>
            {searchResults.length > 0 ? (
              <>
                <div className="flex flex-col gap-5">
                  {searchResults.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </>
            ) : (
              <>
                {categoryproperty.length > 0 ? (
                  <>
                    <div className="flex flex-col gap-5">
                      {categoryproperty.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center h-24">
                      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50 border-solid h-12 w-12"></div>
                    </div>
                  </>
                )}
              </>
            )}
          </section>
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
