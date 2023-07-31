import banner1 from "../../assets/banner1.jpg";
const Banner = () => {
  return (
    <div>
      <img
        className="w-4/6 mx-auto h-[400px] object-cover"
        src={banner1}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
