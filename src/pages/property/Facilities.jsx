import React from "react";

const facilities = [
  "Air-conditioning",
  "Bathtub",
  "Corner Unit",
  "Balcony",
  "Cooker Hob",
  "Sea View",
];
const Facilities = () => {
  return (
    <div id="facilities">
      <h1 className="text-2xl font-semibold">Facilities and Amenities</h1>
      <div className="sm:grid flex flex-col grid-cols-2 gap-3 mt-5">
        {facilities.map((f, index) => (
          <h1 className="font-[450] text-xl" key={index}>
            {f}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
