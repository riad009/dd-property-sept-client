import React from "react";
import Overview from "./Overview";
import Details from "./Details";
import About from "./About";

const OverviewSection = () => {
  return (
    <div id="overview">
      <Overview />
      <Details />
      <About />
    </div>
  );
};

export default OverviewSection;
