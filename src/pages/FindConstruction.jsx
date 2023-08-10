import React from "react";
import SmallContainer from "../shared/SmallContainer";
import Heading from "../components/Heading";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import avatar from "../assets/avatar.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ConstructionCard from "../components/cards/ConstructionCard";
import Provinces from "../components/Provinces";

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
  const location = useLocation();

  return (
    <SmallContainer>
      <div className="p-10">
        <Heading>Find Instruction Company</Heading>
        {/* Search Bar */}
        <div className="my-5 flex justify-center">
          <input
            type="text"
            className="bg-dark/5 text-dark focus:outline-none p-3 rounded-l-md w-full"
            placeholder="Search by Agent or Agency Name"
          />
          <button
            className="bg-danger text-white p-3 rounded-r-md"
            type="submit"
          >
            Search
          </button>
        </div>
        <Provinces />
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
