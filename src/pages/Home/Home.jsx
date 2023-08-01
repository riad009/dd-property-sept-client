import Banner from "./Banner";
import LatestProjects from "./LatestProjects";
import Offers from "./Offers";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <Offers />
      <LatestProjects />
    </div>
  );
};

export default Home;
