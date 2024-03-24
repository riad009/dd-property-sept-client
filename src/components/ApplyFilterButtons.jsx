import { useContext } from "react";
import Button from "./Button";
import { AuthContext } from "../providers/AuthProvider";

const ApplyFilterButtons = ({
  setBedroomsSelected,
  price,
  filterClickEvent,
  bedroomsSelected,
}) => {
  const { handlebedrooms, handlePrice, pricefilter } = useContext(AuthContext);

  const handleFilterButton = () => {
    handlebedrooms(bedroomsSelected);
    handlePrice(pricefilter);
  };

  const clearClickEvent = () => {
    setBedroomsSelected("");
    handlebedrooms("");
  };

  return (
    <div className="text-dark flex justify-between items-center p-5 text-sm">
      <h6 onClick={clearClickEvent}>Clear</h6>
      <Button
        clickEvent={handleFilterButton}
        extraClasses="bg-dark hover:bg-dark/90 text-white"
      >
        Apply Filter
      </Button>
    </div>
  );
};

export default ApplyFilterButtons;
