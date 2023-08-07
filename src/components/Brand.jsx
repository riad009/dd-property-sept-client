import brand from "../assets/brand.svg";
import brandW from "../assets/brandWT.png";

const Brand = ({ medium, center, white }) => {
  return (
    <img
      className={`${medium ? "lg:hidden mx-auto" : "hidden lg:block"} 
        lg:w-40 w-32 ${center && "mx-auto"}`}
      src={white ? brandW : brand}
      alt="brand"
    />
  );
};

export default Brand;
