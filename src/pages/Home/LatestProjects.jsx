import { useNavigate } from "react-router-dom";
import image1 from "../../assets/banner1.jpg";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";

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

  return (
    <div className="bg-dark2/10">
      <SmallContainer extraClasses="px-10 py-16">
        <SectionHeader title="Latest Projects" />
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          {latesProjects?.map((project, index) => (
            <CardOne
              clickEvent={() => navigate("/")}
              key={index}
              image={project.image}
              type={project.type}
              title={project.title}
              text={project.text}
            />
          ))}
        </div>
      </SmallContainer>
    </div>
  );
};

export default LatestProjects;
