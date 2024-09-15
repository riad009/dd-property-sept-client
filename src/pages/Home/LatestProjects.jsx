import { useNavigate } from "react-router-dom";
import image1 from "../../assets/banner1.jpg";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";
import Button from "../../components/Button";
import { useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../../providers/AuthProvider";

const LatestProjects = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/get/latestprojects`);
        const data = await response.json();
        setProperties(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    console.log(properties);
    // Fetch data only on the initial render
    if (loading) {
      fetchData();
    }
  }, [loading]); // Dependency array includes 'loading' to ensure the effect runs when 'loading' changes

  return (
    <div className="bg-dark2/10">
      <SmallContainer extraClasses="px-10 sm:py-16 py-10">
        <SectionHeader title="Latest Properties" />
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          {properties?.map((property, index) => (
            <CardOne
              clickEvent={() => {
                navigate(
                  `/property/projects/${property?.propertyName
                    ?.toLowerCase()
                    .replace(/ /g, "-")}/${property?.location
                    ?.toLowerCase()
                    .replace(/ /g, "-")}/${property?.province
                    ?.toLowerCase()
                    .replace(/ /g, "-")}/${property?.city
                    ?.toLowerCase()
                    .replace(/ /g, "-")}/${property?.listingType}/${
                    property?._id
                  }`
                );
              }}
              key={index}
              property={property}
            />
          ))}
          {/* {properties?.map((property, index) => (
            <CardOne
              clickEvent={() => navigate(`/property/projects/${property._id}`)}
              // clickEvent={() => navigate(`/property/projects/${property.name?.toLowerCase().replace(/ /g, '-')}/${property.listingType}/${property._id}`)}
              key={index}
              property={property}
              // image={project.image}
              // type={project.type}
              // title={project.title}
              // text={project.text}
            />
          ))} */}
        </div>
        {/* <Button extraClasses="sm:hidden bg-dark text-white mx-auto mt-10">
          View More
        </Button> */}
      </SmallContainer>
    </div>
  );
};

export default LatestProjects;
