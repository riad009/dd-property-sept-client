import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import { useState } from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const provinces = [
  {
    image: banner1,
    name: "Bankok",
  },
  {
    image: banner2,
    name: "Bankok",
  },
  {
    image: banner1,
    name: "Bankok",
  },
  {
    image: banner2,
    name: "Bankok",
  },
  {
    image: banner1,
    name: "Bankok",
  },
  {
    image: banner1,
    name: "Bankok",
  },
  {
    image: banner2,
    name: "Bankok",
  },
  {
    image: banner1,
    name: "Bankok",
  },
  {
    image: banner2,
    name: "Bankok",
  },
  {
    image: banner1,
    name: "Bankok",
  },
];

const Provinces = () => {
  const [initial, setInitial] = useState(8);
  const [showMore, setShowMore] = useState(true);

  return (
    <div>
      <Heading>Browse by province</Heading>
      <div className="mt-5 grid md:grid-cols-4 grid-cols-2 gap-5">
        {provinces.slice(0, initial).map((province, index) => {
          return (
            <Link key={index} className="relative bg-green text-black">
              <img
                className="brightness-50 rounded"
                src={province.image}
                alt="province"
              />
              <h1 className="absolute top-1/2 left-1/2 text-white trasform -translate-x-1/2 -translate-y-1/2">
                {province.name}
              </h1>
            </Link>
          );
        })}
      </div>

      <h1
        onClick={() => {
          setShowMore(!showMore);
          setInitial(showMore ? 8 : provinces.length);
        }}
        className="cursor-pointer my-5 flex items-center font-semibold text-danger"
      >
        {showMore ? "Show Less" : "Show More"}{" "}
        {!showMore && `(${provinces.length - 8})`}
        {showMore ? (
          <BiChevronUp className="text-xl" />
        ) : (
          <BiChevronDown className="text-xl" />
        )}
      </h1>
    </div>
  );
};

export default Provinces;
