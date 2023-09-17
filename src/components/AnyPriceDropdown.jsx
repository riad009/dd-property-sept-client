import { Divider, InputNumber } from "antd";
import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "./ApplyFilterButtons";

const AnyPrice = ({
  footer2Handler,
  footer2Open,
  minPriceHandler,
  maxPriceHandler,
  border,
  filterPrice,
  handleApplyFilterPrice,
  minPrice,
  maxPrice,
  handleClearPrice
}) => {
  console.log(minPrice,maxPrice)
  return (
    <div className={`relative ${border && "bg-white w-fit py-2 rounded-md"}`}>
      <h6
        onClick={footer2Handler}
        className="flex items-center gap-1 cursor-pointer"
      >
        {filterPrice ? `$ ${filterPrice.minPrice >0?filterPrice.minPrice:'Below'} -${filterPrice.maxPrice > 0 ? filterPrice.maxPrice:'Above'}`:'Any Price'}
        {footer2Open ? <BiChevronUp /> : <BiChevronDown />}
      </h6>
      {footer2Open && (
        <div
          className={`absolute shadow-md rounded-lg ${
            border ? "top-12 shadow-lg" : "top-7"
          } -right-28 bg-white w-80`}
        >
          <div className="p-3">
            <h1 className="text-dark text-sm">Price</h1>
            <div className="flex text-sm gap-5 mt-5">
              {/* Footer Header */}

              <InputNumber
                type="number"
                addonBefore={<span>&#3647;</span>}
                placeholder="Min Price"
                onChange={minPriceHandler}
              />

              <InputNumber
                type="number"
                addonBefore={<span>&#3647;</span>}
                placeholder="Max Price"
                onChange={maxPriceHandler}
              />
            </div>
          </div>
          <Divider />
          {/* Footer Footer */}
          <ApplyFilterButtons 
          filterClickEvent={handleApplyFilterPrice}
          clearClickEvent={handleClearPrice}
          />
        </div>
      )}
    </div>
  );
};

export default AnyPrice;
