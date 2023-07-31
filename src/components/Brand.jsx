import brand from "../assets/brand.svg";

const Brand = ({ medium }) => {
  return (
    <img
      className={`${
        medium ? "lg:hidden mx-auto" : "hidden lg:block"
      } lg:w-40 w-32`}
      src={brand}
      alt="brand"
    />
  );
};

export default Brand;
