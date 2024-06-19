import { Divider, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ApplyFilterButtons from "./ApplyFilterButtons";
import { useUserContext } from "../providers/AuthProvider";

const AnyPrice = ({ footer2Handler, footer2Open, border, closeAllDropdowns }) => {
  const { setpricefilter, pricefilter } = useUserContext();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    if (pricefilter) {
      setMinPrice(pricefilter.minPrice);
      setMaxPrice(pricefilter.maxPrice);
    }
  }, [pricefilter]);

  const minPriceHandler = (e) => {
    setMinPrice(e);
    setpricefilter((prev) => ({
      ...prev,
      minPrice: e,
    }));
  };

  const maxPriceHandler = (e) => {
    setMaxPrice(e);
    setpricefilter((prev) => ({
      ...prev,
      maxPrice: e,
    }));
  };

  const priceLabel = () => {
    if (minPrice === undefined || maxPrice === undefined) {
      return "Any Price";
    }
    if (minPrice && maxPrice) {
      return `฿${minPrice} - ฿${maxPrice}`;
    } else if (minPrice) {
      return `฿${minPrice}+`;
    } else if (maxPrice) {
      return `Up to ฿${maxPrice}`;
    }
    return "Any Price";
  };

  return (
    <div className={`relative ${border && "bg-white w-fit py-2 rounded-md"}`}>
      <h6
        onClick={footer2Handler}
        className="flex items-center gap-1 cursor-pointer"
      >
        {priceLabel()}
        {footer2Open ? <BiChevronUp /> : <BiChevronDown />}
      </h6>
      {footer2Open && (
        <div
          className={`absolute shadow-md rounded-lg ${border ? "top-12 shadow-lg" : "top-7"
            } -right-28 bg-white w-80`}
        >
          <div className="p-3">
            <h1 className="text-dark text-sm">Price</h1>
            <div className="flex text-sm gap-5 mt-5">
              <InputNumber
                type="number"
                addonBefore={<span>&#3647;</span>}
                placeholder="Min Price"
                value={minPrice}
                onChange={minPriceHandler}
              />
              <InputNumber
                type="number"
                addonBefore={<span>&#3647;</span>}
                placeholder="Max Price"
                value={maxPrice}
                onChange={maxPriceHandler}
              />
            </div>
          </div>
          <Divider />
          <ApplyFilterButtons closeAllDropdowns={closeAllDropdowns} />
        </div>
      )}
    </div>
  );
};

export default AnyPrice;
