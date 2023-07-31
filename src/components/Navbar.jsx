import brand from "../assets/brand.svg";
import Container from "../shared/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="p-5">
        <img className="w-28" src={brand} alt="brand" />
      </div>
    </Container>
  );
};

export default Navbar;
