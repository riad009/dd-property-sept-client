import React from "react";
import Overview from "./Overview";
import Details from "./Details";
import About from "./About";

const OverviewSection = ({property}) => {
  return (
    <div id="overview">
      <Overview property={property} />
      <Details p={property}/>
      <About p={property} />
    </div>
  );
};

export default OverviewSection;
