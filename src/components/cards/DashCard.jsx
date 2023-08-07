import React from "react";

const DashCard = ({ icon, bgColor, number, title }) => {
  return (
    <div className="flex items-center justify-between shadow bg-white p-10 rounded-lg">
      <div>
        <h1 className="text-3xl">{number}</h1>
        <p>{title}</p>
      </div>
      <div className={`rounded-full p-4 text-4xl ${bgColor}`}>{icon}</div>
    </div>
  );
};

export default DashCard;
