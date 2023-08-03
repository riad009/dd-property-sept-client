import SmallContainer from "../../shared/SmallContainer";
import { useParams } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";

import "react-slideshow-image/dist/styles.css";
import BodyNav from "./BodyNav";
import OverviewSection from "./OverviewSection";
import Banner from "./Banner";
import StickySection from "./StickySection";
import AvailableUnitSection from "./AvailableUnitSection";

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

  return (
    <div>
      <Banner breadCrumbItems={breadCrumbItems} images={images} />
      {/* Body Navbar */}
      <div className="sm:sticky top-0 sm:max-h-[calc(60vh-40px)]">
        <BodyNav />
      </div>
      <SmallContainer extraClasses="relative p-10">
        <div className="sm:flex gap-5">
          <div className="flex-1">
            <OverviewSection />
            <AvailableUnitSection />
          </div>
          <div className="sm:h-screen max-h-[calc(100vh-40px)]">
            <StickySection handleContactAbout={handleContactAbout} />
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default SingleProperty;
