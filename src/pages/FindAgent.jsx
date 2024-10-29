import SmallContainer from "../shared/SmallContainer";
import Heading from "../components/Heading";
import company from "../assets/company.webp";
import agent from "../assets/agent_pic.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import Provinces from "../components/Provinces";
import AgentCard from "../components/cards/AgentCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const featuredAgents = [
  {
    id: 1,
    name: "Krittawan Talomkham",
    title: "Freelance Real Estate Agent",
    image: agent,
    status: "verified",
    company_logo: company,
    phoneNumber: "+66 89 937 5511",
  },
  {
    id: 2,
    name: "Krittawan Talomkham",
    title: "Freelance Real Estate Agent",
    image: agent,
    status: "not-verified",
    company_logo: company,
    phoneNumber: "+66 89 937 5511",
  },
];

const FindAgent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // Get search params
  const searchName = searchParams.get("name") || "";

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchAgents = async (name) => {
    try {
      const res = await axios.get(`/users/agents?name=${name}`);
      const fetchedAgents = res.data.data;
      return fetchedAgents;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: agents = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["agents", searchName],
    queryFn: () => fetchAgents(searchName),
    refetchOnWindowFocus: true,
  });

  const handelResetQuery = () => {
    setSearch("");
    const url = new URL(window.location);
    url.search = ""; // Clear all search parameters
    window.history.replaceState({}, document.title, url.toString());
    navigate("/find-agent");
  };

  return (
    <SmallContainer>
      <div className="p-10">
        <Heading>Find Agent</Heading>
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
              navigate("/find-agent?name=" + search);
            }}
          >
            Search
          </button>
        </div>
        {/* <Provinces /> */}
      </div>
      <div className="p-10">
        <Heading>Featured Agents</Heading>
        <div className="my-5 grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {error ? (
            <p>Error: {error.message}</p>
          ) : (
            <>
              {isLoading ? (
                <Loader />
              ) : agents.length > 0 ? (
                agents.map((agent, index) => (
                  <AgentCard key={index} agent={agent} />
                ))
              ) : (
                <p className="text-center text-sm text-danger">
                  No Agents Found
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </SmallContainer>
  );
};

export default FindAgent;
