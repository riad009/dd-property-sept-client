import { Link } from "react-router-dom";
import brand from "../assets/brand.svg";
import brandW from "../assets/brandWT.png";

const Brand = ({ medium, center, white }) => {
  return (
    <Link to="/">
      <img
        className={`${medium ? "lg:hidden mx-auto" : "hidden lg:block"} 
        lg:w-40 w-32 ${center && "mx-auto"}`}
        src="/brand.jpg"
        alt="brand"
      />
    </Link>
  );
};

export default Brand;
