import { useNavigate } from "react-router-dom";
import image1 from "../../assets/banner1.jpg";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";
import Button from "../../components/Button";
import { useEffect, useState } from "react";

const latesProjects = [
  {
    image: image1,
    type: "New Project",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    type: "New Project",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    type: "New Project",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
  {
    image: image1,
    type: "New Project",
    title: "InterContinental Residences Hua Hin, Prachuap Khiri Khan",
    text: "Hua Hin, Prachuap Khiri Khan",
  },
];

const LatestProjects = () => {
  const navigate = useNavigate();
  const [property,setProperty]=useState([])

  useEffect(()=>{
    fetch(`https://dd-property-server.vercel.app/property/latest`)
    .then(res=>res.json())
    .then(data=>setProperty(data))
    console.log(property)
  },[])

  return (
    <div className="bg-dark2/10">
      <SmallContainer extraClasses="px-10 sm:py-16 py-10">
        <SectionHeader title="Latest Projects" />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
          {property?.map((project, index) => (
            <CardOne
              clickEvent={() => navigate(`/property/projects/${project._id}`)}
              key={index}
              image={project.propertyProfile}
              type={project.propertyType}
              title={project.propertyTitle}
              text={project.descripton}
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

export default LatestProjects;
