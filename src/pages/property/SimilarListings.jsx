import image1 from "../../assets/banner1.jpg";
import SectionHeader from "../../components/SectionHeader";
import CardOne from "../../components/cards/CardOne";
import SmallContainer from "../../shared/SmallContainer";

const similarListings = [
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

const SimilarListings = () => {
  return (
    <div className="bg-dark/10 px-10">
      {/* <SmallContainer extraClasses="sm:py-16 py-10">
        <SectionHeader title="Similar Listings" />
        <div className="md:overflow-x-hidden overflow-x-scroll flex gap-5">
          {similarListings?.map((project, index) => (
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
      </SmallContainer> */}
    </div>
  );
};

export default SimilarListings;
