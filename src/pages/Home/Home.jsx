import Banner from "./Banner";
import BelowAskGuru from "./BelowAskGuru";
import BuyCondos from "./BuyCondos";
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
      {/* <VirtualTours /> */}
      <HandPicked />
      {/* <BuyCondos /> */}
      {/* <BelowAskGuru /> */}
    </div>
  );
};

export default Home;
