import image1 from "../../assets/banner1.jpg";
import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";

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

const HandPicked = () => {
  return (
    <div className="bg-dark2/10">
      <SmallContainer extraClasses="px-10 sm:py-16 py-10">
        <SectionHeader title="Handpicked for you" />
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          {handPicked?.map((project, index) => (
            <CardOne
              key={index}
              shadow
              image={project.image}
              price={project.price}
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

export default HandPicked;
