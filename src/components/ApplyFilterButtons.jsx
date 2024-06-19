import React, { useCallback, useContext } from "react";
import Button from "./Button";
import { AuthContext } from "../providers/AuthProvider";

const ApplyFilterButtons = ({
  bedroomsSelected,
  closeAllDropdowns,
  setValue
}) => {
  // Accessing necessary functions and state from AuthContext
  console.log(typeof setValue); // Should log "function"
  console.log(typeof closeAllDropdowns); // Should log "function"

  const {
    handlebedrooms,
    handlePrice,
    pricefilter,
    setpricefilter,
    setBedroomsSelected
  } = useContext(AuthContext);

  // Handler for applying filters
  const handleFilterButton = useCallback(() => {
    // Applying bedroom and price filters
    handlebedrooms(bedroomsSelected);
    handlePrice(pricefilter);

    // Closing all dropdowns after applying filters
    closeAllDropdowns();
  }, [bedroomsSelected, pricefilter, handlebedrooms, handlePrice, closeAllDropdowns]);

  // Handler for clearing filters
  const clearClickEvent = useCallback(() => {
    // Clearing bedroom selection
    closeAllDropdowns();
    setBedroomsSelected("");
    handlebedrooms(""); // Clearing bedroom filter state
    setpricefilter({ minPrice: "", maxPrice: "" }); // Clearing price filter state

    // Setting value to "All Residential"
    setValue("All Residential");

    // Optional: Log a message to verify if clearClickEvent is called
    console.log("Filters cleared");
  }, [closeAllDropdowns, setBedroomsSelected, handlebedrooms, setpricefilter, setValue]);

  return (
    <div className="text-dark flex justify-between items-center p-5 text-sm">
      {/* Button to clear filters */}
      <h6 onClick={clearClickEvent} className="cursor-pointer">
        Clear
      </h6>

      {/* Button to apply filters */}
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
