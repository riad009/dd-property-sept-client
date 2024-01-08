import SmallContainer from "../../shared/SmallContainer";
import { useLoaderData, useParams } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";
import BodyNav from "./BodyNav";
import OverviewSection from "./OverviewSection";
import Banner from "./Banner";
import StickySection from "./StickySection";
import AvailableUnitSection from "./AvailableUnitSection";
import "react-slideshow-image/dist/styles.css";
import Facilities from "./Facilities";
import HomeFinance from "./HomeFinance";
import Location from "./Location";
import ContactDeveloper from "./ContactDeveloper";
import SimilarListings from "./SimilarListings";
import FAQ from "./FAQ";
import { useEffect } from "react";
import { useState } from "react";
import MoreDetails from "./MoreDetails";

const SingleProperty = () => {
  const { projectName } = useParams();

  const breadCrumbItems = [
    {
      href: "/",
      title: <HomeOutlined />,
    },
    {
      title: "Property",
      href: "/",
    },
    {
      title: "Projects",
      href: "/",
    },
    {
      title: projectName,
    },
  ];

  const images = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img1,
    },
  ];

  const handleContactAbout = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  //get by propterty
  const property = useLoaderData();

  return (
    <div>
      <Banner p={property} breadCrumbItems={breadCrumbItems} images={images} />
      {/* Body Navbar */}
      <div className="sm:sticky top-0 z-50 sm:max-h-[calc(60vh-40px)]">
        <BodyNav />
      </div>
      <SmallContainer extraClasses="relative p-10">
        <div className="sm:flex gap-5">
          <div className="flex-1">
            <OverviewSection property={property} />
            <MoreDetails property={property}></MoreDetails>
            {/* <AvailableUnitSection p={property} images={images} /> */}
            <Facilities property={property} />
          </div>
          <div>
            <StickySection
              handleContactAbout={handleContactAbout}
              property={property}
            />
          </div>
        </div>
        {/* <HomeFinance /> */}
        <Location property={property} />
        <ContactDeveloper />
      </SmallContainer>
      <SimilarListings />
      <SmallContainer>
        <FAQ />
      </SmallContainer>
    </div>
  );
};

export default SingleProperty;
