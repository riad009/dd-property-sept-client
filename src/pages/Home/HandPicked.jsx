import { useEffect, useState } from "react";
import image1 from "../../assets/banner1.jpg";
import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";
import { Navigate, useNavigate } from "react-router-dom";
import { baseURL } from "../../providers/AuthProvider";

const handPicked = [
  {
    image: image1,
    price: 2000,
    type: "Studio",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    price: 2000,
    type: "Studio",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    price: 2000,
    type: "Studio",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    price: 2000,
    type: "Studio",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
];
//

const HandPicked = () => {
  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/get/handpicked`);
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

  return (
    <div className="bg-dark2/10">
      <SmallContainer extraClasses="px-10 sm:py-16 py-10">
        <SectionHeader title="Handpicked for you" />
        <div className="md:overflow-x-hidden overflow-x-scroll flex gap-5">
          {properties?.map((property, index) => (
            <CardOne
              clickEvent={() => Navigate(`/property/projects/${property._id}`)}
              key={index}
              property={property}
              // shadow
              // image={project.image}
              // price={project.price}
              // type={project.type}
              // title={project.title}
              // text={project.text}
            />
          ))}
        </div>
        <Button extraClasses="sm:hidden bg-dark text-white mx-auto mt-10">
          View More
        </Button>
      </SmallContainer>
    </div>
  );
};

export default HandPicked;
