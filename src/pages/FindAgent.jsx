import React from "react";
import SmallContainer from "../shared/SmallContainer";
import Heading from "../components/Heading";
import company from "../assets/company.webp";
import agent from "../assets/agent_pic.jpg";
import avatar from "../assets/avatar.png";
import { useLocation } from "react-router-dom";
import ConstructionCard from "../components/cards/ConstructionCard";
import Provinces from "../components/Provinces";
import AgentCard from "../components/cards/AgentCard";

const featuredAgents = [
  {
    name: "Krittawan Talomkham",
    title: "Freelance Real Estate Agent",
    image: agent,
    status: "verified",
    company_logo: company,
    phoneNumber: "+66 89 937 5511",
  },
  {
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

  return (
    <SmallContainer>
      <div className="p-10">
        <Heading>Find Agent</Heading>
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
      <div className="p-10">
        <Heading>Featured Agents</Heading>
        <div className="my-5 grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {featuredAgents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>
      </div>
    </SmallContainer>
  );
};

export default FindAgent;
