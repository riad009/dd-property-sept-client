import { useEffect, useState } from "react";
import image1 from "../../assets/banner1.jpg";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";
import { Link, useNavigate } from "react-router-dom";
import { baseURL, useUserContext } from "../../providers/AuthProvider";

const buyCondosData = [
  {
    image: image1,
    type: "Video",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    type: "New Project",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    type: "Virtual Tour",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    type: "Virtual Tour",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
];

const CurtaredCollection = () => {
  const { searchvalue, handleCategory, handleSearchvalue } = useUserContext();
  const [properties, setProperties] = useState([]);
  console.log("properties", properties);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/get/curated`);
        const data = await response.json();
        setProperties(data);
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
  }, [loading]); // Dependency array includes 'loading' to ensure the effect runs when 'loading' changes

  const navigate = useNavigate();

  const handleClick = (property) => {
    handleCategory(property);
    handleSearchvalue("");
    navigate(`/property-for-sale`);
  };
  // context api

  // context api
  return (
    <div>
      <SmallContainer extraClasses="px-10 py-16">
        <SectionHeader newItem title="Curated Collections" />
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          {loading && <h1>Loading...</h1>}
          {!loading &&
            properties.map((property, index) => (
              // <Link key={index} to={`/property-for-sale/${property.combinedFields.category}/${property.combinedFields.category2}`}>
              <section onClick={() => handleClick(property)}>
                {/* Your existing code for each property */}
                <div className="relative">
                  <img
                    src="https://photos.zillowstatic.com/fp/700731fde9d8bc354c5fea78d8a3a755-p_e.jpg"
                    alt="card_image"
                    className={`${"rounded-t"}`}
                    style={{ height: "200px", width: "300px" }}
                  />
                  <span
                    className={`absolute -bottom-2 left-0 bg-danger text-white px-2 text-[0.7rem] rounded-r-md`}
                  >
                    condo
                  </span>
                </div>
                <div className="my-4">
                  <p className="text-md font-semibold">{property._id}</p>
                  <p className="text-sm text-dark2">
                    {property.count} Listings
                  </p>
                </div>
              </section>
            ))}
        </div>
      </SmallContainer>
    </div>
  );
};

export default CurtaredCollection;
