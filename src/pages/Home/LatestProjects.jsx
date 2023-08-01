import image1 from "../../assets/banner1.jpg";
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
  return (
    <div className="bg-dark2/5">
      <SmallContainer extraClasses="p-10">
        <h1 className="font-semibold text-3xl mb-3">Latest Projects</h1>
        <div className="grid grid-cols-4 gap-5">
          {latesProjects.map((project, index) => (
            <CardOne
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
