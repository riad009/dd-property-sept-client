import banner1 from "../../assets/banner1.jpg";
import { useUserContext } from "../../providers/AuthProvider";
import SearchLocation from "./SearchLocation";
const Banner = () => {


  return (
    <div className="relative flex sm:flex-col flex-col-reverse bg-dark/10">
      <img
        className="max-w-screen-xl w-full mx-auto h-[365px] object-cover"
        src={banner1}
        alt="banner"
      />
      <SearchLocation />
    </div>
  );
};

export default Banner;
