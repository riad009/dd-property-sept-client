import Banner from "./Banner";
import HandPicked from "./HandPicked";
import LatestProjects from "./LatestProjects";
import Offers from "./Offers";
import VirtualTours from "./VirtualTours";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <Offers />
      <LatestProjects />
      <VirtualTours />
      <HandPicked />
    </div>
  );
};

export default Home;
