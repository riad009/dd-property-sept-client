import Banner from "./Banner";
import BelowAskGuru from "./BelowAskGuru";

import LatestProjects from "./LatestProjects";
import Offers from "./Offers";

const Home = () => {
  return (
    <div className="relative">
      <Banner />
      <Offers />
      <LatestProjects />
      <BelowAskGuru />
    </div>
  );
};

export default Home;
