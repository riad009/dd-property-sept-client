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
import VideoSection from "./VideoSection";
import MapLocation from "../../components/Steps/MapLoaction";

const SingleProperty = () => {
  const { projectName } = useParams();
  const [selectedLocation, setSelectedLocation] = useState({});
  const [map, setMap] = useState(null);

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

  const parseLatLng = (latLngString) => {
    try {
      const parsed = JSON.parse(latLngString);
      return parsed;
    } catch (error) {
      console.error("Failed to parse latLng:", error);
      return { lat: 0, lng: 0 };
    }
  };

  // Assuming property is defined and has latLng
  const loc = property.latLng
    ? parseLatLng(property.latLng)
    : { lat: 0, lng: 0 };
  return (
    <div>
      <div style={{
        marginLeft: "15px",
        marginRight: "15px"
      }}>
        <Banner
          p={property}
          breadCrumbItems={breadCrumbItems}
          images={property?.imageUrls}
          coverImage={property?.coverImage}
        />
      </div>
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
            <VideoSection property={property} />
            {/* <Facilities property={property} /> */}
          </div>
          <div>
            <StickySection
              handleContactAbout={handleContactAbout}
              property={property}
            />
          </div>
        </div>
        {/* <HomeFinance /> */}
        <MapLocation location={loc} setMap={() => { }} />
        {/* <Location lat={loc?.lat} lng={loc?.lng} /> */}
        {property?.isVerified && <ContactDeveloper property={property} />}
      </SmallContainer>
      <SimilarListings />
      <SmallContainer>
        <FAQ />
      </SmallContainer>
    </div>
  );
};

export default SingleProperty;
