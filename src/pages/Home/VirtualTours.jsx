import image1 from "../../assets/banner1.jpg";
import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";

const virtualToursData = [
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

const VirtualTours = () => {
  return (
    <div>
      <SmallContainer extraClasses="px-10 sm:py-16 py-10">
        <SectionHeader newItem title="Videos & Virtual Tours" />
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          {virtualToursData?.map((project, index) => (
            <CardOne
              key={index}
              image={project.image}
              type={project.type}
              title={project.title}
              text={project.text}
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

export default VirtualTours;
