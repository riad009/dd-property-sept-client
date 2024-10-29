import React from "react";
import Button from "../Button";
import Verified from "../Verified";
import { Link } from "react-router-dom";
import { useState } from "react";

const AgentCard = ({ agent }) => {
  const { id, name, image, title, status, phoneNumber, company_logo } = agent;

  const [call, setCall] = useState(false);

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
      {status && status === "verified" && (
        <div className="absolute top-0 right-2">
          <Verified />
        </div>
      )}
      <div className="my-3 text-center">
        <Link to={`/agent/${id}`} className="text-danger font-semibold">
          {name}
        </Link>
        <h1 className="text-xs">{title}</h1>
      </div>
      <div className="flex items-baseline justify-center gap-5">
        <Button
          clickEvent={() => setCall(!call)}
          extraClasses={`border border-danger flex-1 justify-center ${
            call ? "bg-danger text-white" : "bg-white"
          }`}
        >
          {call ? phoneNumber : "Call"}
        </Button>
        <Button extraClasses="border border-danger bg-white">Contact</Button>
      </div>
    </div>
  );
};

export default AgentCard;
