import React from "react";
import Button from "../Button";
import Varified from "../Varified";

const AgentCard = ({ agent }) => {
  const { name, image, title, status, phoneNumber, company_logo } = agent;

  return (
    <div className="relative bg-dark2/10 p-5 rounded-lg">
      <div className="flex items-center justify-center gap-5">
        <img
          className="h-20 w-20 rounded-full object-cover"
          src={image}
          alt="agent_image"
        />
        <img
          className="h-10 w-10 object-cover"
          src={company_logo}
          alt="company_image"
        />
      </div>
      {status === "verified" && (
        <div className="absolute top-0 right-2">
          <Varified />
        </div>
      )}
      <div className="my-3 text-center">
        <h1 className="text-danger font-semibold">{name}</h1>
        <h1 className="text-xs">{title}</h1>
      </div>
      <div className="flex items-baseline justify-center gap-5">
        <Button extraClasses="border border-danger bg-white">Call</Button>
        <Button extraClasses="border border-danger bg-white">Contact</Button>
      </div>
    </div>
  );
};

export default AgentCard;
