import banner1 from "../../assets/banner1.jpg";
import SearchLocation from "./SearchLocation";
const Banner = () => {
  return (
    <div className="relative flex sm:flex-col flex-col-reverse">
      <img
        className="max-w-screen-xl w-full mx-auto h-[400px] object-cover"
        src={banner1}
        alt="banner"
      />
      <SearchLocation />
    </div>
  );
};

export default Banner;
