import Banner from "./Banner";
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
    </div>
  );
};

export default Home;
