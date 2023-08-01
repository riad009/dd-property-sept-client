import image1 from "../../assets/banner1.jpg";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";

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

const BuyCondos = () => {
  return (
    <div>
      <SmallContainer extraClasses="px-10 py-16">
        <SectionHeader newItem title="Buy Condos Near BTS/MRT" />
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          {buyCondosData?.map((project, index) => (
            <CardOne
              key={index}
              typeColor="bg-yellow-500"
              image={project.image}
              type={project.type}
              title={project.title}
              text={project.text}
            />
          ))}
        </div>
      </SmallContainer>
      <SmallContainer extraClasses="px-10 py-16">
        <SectionHeader title="Curated Collections" />
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          {buyCondosData?.map((project, index) => (
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

export default BuyCondos;
