import React from "react";
import SmallContainer from "../shared/SmallContainer";
import Heading from "../components/Heading";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import avatar from "../assets/avatar.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ConstructionCard from "../components/cards/ConstructionCard";

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

const constructions = [
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner2,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner2,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner1,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner2,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
  {
    image: banner2,
    type: "Business",
    title: "Skills that you can leran in the real estate market",
    date: "August 2022",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    sellerImage: avatar,
    sellerName: "Ali Tufan",
  },
];

const FindConstruction = () => {
  const [initial, setInitial] = useState(8);
  const [showMore, setShowMore] = useState(true);

  const location = useLocation();
  console.log(location);
  return (
    <SmallContainer>
      <div className="p-10">
        <Heading>Find Instruction Company</Heading>
        {/* Search Bar */}
        <div className="my-5 flex justify-center">
          <input
            type="text"
            className="bg-dark/5 text-dark focus:outline-none p-3 rounded-l-md w-full"
            placeholder="Search Location"
          />
          <button
            className="bg-danger text-white p-3 rounded-r-md"
            type="submit"
          >
            Search
          </button>
        </div>
        <div>
          <Heading>Browse by province</Heading>
          <div className="mt-5 grid grid-cols-4 gap-5">
            {provinces.slice(0, initial).map((province, index) => {
              return (
                <Link className="relative bg-green text-black">
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
      </div>
      <div className="p-10 bg-dark2/5 rounded-2xl">
        <Heading>Construction Company</Heading>
        <div className="my-5 grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {constructions.map((construction, index) => (
            <ConstructionCard key={index} construction={construction} />
          ))}
        </div>
      </div>
    </SmallContainer>
  );
};

export default FindConstruction;
