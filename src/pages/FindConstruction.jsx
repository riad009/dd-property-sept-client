import React, { useEffect } from "react";
import SmallContainer from "../shared/SmallContainer";
import Heading from "../components/Heading";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import avatar from "../assets/avatar.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConstructionCard from "../components/cards/ConstructionCard";
import Provinces from "../components/Provinces";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";

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

  const searchParams = new URLSearchParams(location.search); // Get search params
  const searchTitle = searchParams.get("title") || "";

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  console.log(searchTitle);
  const fetchConstructors = async (title) => {
    try {
      const res = await axios.get(`/users/constructors?title=${title}`);
      const fetchedConstructors = res.data.data;
      return fetchedConstructors;
    } catch (error) {
      console.log(error);

      throw error;
    }
  };

  const {
    data: constructors = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["constructors", searchTitle],
    queryFn: () => fetchConstructors(searchTitle),
    refetchOnWindowFocus: true,
  });

  console.log(error);

  const handelResetQuery = () => {
    setSearch("");
    const url = new URL(window.location);
    url.search = ""; // Clear all search parameters
    window.history.replaceState({}, document.title, url.toString());
    navigate("/find-construction");
  };

  return (
    <SmallContainer>
      <div className="p-10">
        <Heading>Find Construction Company</Heading>
        {/* Search Bar */}
        <div className="my-5 flex justify-center relative">
          <input
            type="text"
            className="bg-dark/5 text-dark focus:outline-none p-3 rounded-l-md w-full pr-10"
            placeholder="Search by Agent or Agency Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-600 p-2 rounded-md"
              onClick={handelResetQuery}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <button
            className="bg-danger text-white p-3 rounded-r-md"
            type="submit"
            onClick={() => {
              navigate("/find-construction?title=" + search);
            }}
          >
            Search
          </button>
        </div>
        {/* <Provinces /> */}
      </div>
      <div className="p-10 bg-dark2/5 rounded-2xl">
        <Heading>Construction Company</Heading>
        <div className="my-5 grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {
            <>
              {isLoading ? (
                <Loader />
              ) : constructors.length > 0 ? (
                constructors.map((constructor, index) => (
                  <ConstructionCard key={index} constructor={constructor} />
                ))
              ) : (
                <p className="text-center text-sm text-danger">
                  No Constructor Found
                </p>
              )}
            </>
          }
        </div>
      </div>
    </SmallContainer>
  );
};

export default FindConstruction;
