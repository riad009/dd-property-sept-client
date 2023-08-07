import React from "react";
import { MdHome } from "react-icons/md";

const DashCard = () => {
  return (
    <div className="flex items-center justify-between shadow bg-white p-10 rounded-lg">
      <div>
        <h1 className="text-3xl">36</h1>
        <p>All Properties</p>
      </div>
      <MdHome className="rounded-full bg-dark2/10 p-2 text-6xl" />
    </div>
  );
};

export default DashCard;
