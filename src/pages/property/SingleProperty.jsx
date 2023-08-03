import { Breadcrumb, Checkbox, Divider, Tooltip } from "antd";
import SmallContainer from "../../shared/SmallContainer";
import { Link, useParams } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { PiShareFatThin, PiHeart, PiHeartFill } from "react-icons/pi";
import { CiTwitter, CiCircleChevRight } from "react-icons/ci";
import { MdFacebook, MdLocationOff, MdLocationOn } from "react-icons/md";
import { RiCommunityFill, RiUserLocationFill } from "react-icons/ri";
import { GiBathtub, GiBed } from "react-icons/gi";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";
import img4 from "../../assets/leaf.jpg";

import thumb from "../../assets/singleProjectThumb.jpg";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import BodyNav from "./BodyNav";
import Button from "../../components/Button";
import TextRed from "../../components/TextRed";

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

  const data = [
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
      <SmallContainer extraClasses="p-5">
        {/* Navigations */}
        <Breadcrumb separator=">" items={breadCrumbItems} />
        {/* Header */}
        <div className="flex items-center">
          <img className="w-20" src={thumb} alt="Thumb" />
          <h1 className="sm:text-2xl font-semibold">
            Sheria Vicinity Ratchaphruek - Jesadabodin : Sheria Vicinity
            Ratchaphruek - Jesadabodin, Nonthaburi
          </h1>
        </div>
        <h1 className="sm:text-xl text-xs">
          Premium New Project Next To The Main Road, 6 Lanes, On The Location Of
          Ratchaphruek - Nonthaburi 1
        </h1>
        {/* Social Media */}
        <div className="sm:flex items-start justify-between text-xs sm:my-5 my-2">
          <div className="flex items-center gap-2">
            {["New Project", "townhouse", "singlehouse"].map((name, index) => (
              <span
                key={index}
                className="rounded-full border border-danger py-0.5 px-3"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="text-3xl flex gap-2 sm:mt-0 mt-5">
            <Tooltip
              color="white"
              style={{
                width: "25%",
              }}
              placement="bottom"
              title={
                <div className="grid grid-cols-2 gap-5 p-5">
                  <div className="cursor-pointer flex rounded-md items-center bg-sky-600 py-1 px-3">
                    <CiTwitter className="text-2xl" />
                    <p className="md:hidden">Twitter</p>
                  </div>
                  <div className="cursor-pointer flex rounded-md items-center bg-sky-600 py-1 px-3">
                    <MdFacebook className="text-2xl" />
                    <p className="md:hidden">Facebook</p>
                  </div>
                </div>
              }
            >
              <PiShareFatThin className="hover:bg-dark hover:text-white transition-300 border border-dark/50 rounded p-1" />
            </Tooltip>
            {/* <PiHeartFill className="border border-dark/50 rounded p-1" /> */}
            <PiHeart className="hover:bg-dark hover:text-white border border-dark/50 rounded p-1 transition-300 " />
          </div>
        </div>
      </SmallContainer>
      {/* Image Gallery */}
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        duration={100}
        autoplay={false}
        infinite={false}
        responsive={[
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ]}
      >
        {data.map((item, index) => (
          <img key={index} src={item.img} />
        ))}
      </Slide>

      <SmallContainer extraClasses="p-10">
        {/* Important Details */}
        <div className="sm:flex gap-5 justify-between">
          <Details icon={<CiCircleChevRight />}>
            Good location, next to the main road, 6 lanes, 5 minutes to the BTS,
            20 minutes to Sathorn
          </Details>
          <Divider type="vertical h-20 my-auto" />

          <Details icon={<CiCircleChevRight />}>
            There is a multipurpose room. downstairs to adjust functions
            according to lifestyle
          </Details>
          <Divider type="vertical h-20 my-auto" />

          <Details icon={<CiCircleChevRight />}>
            Central area, large green area throughout the project Access to
            every green space
          </Details>
          <Divider type="vertical h-20 my-auto" />

          <Details icon={<CiCircleChevRight />}>
            24-hour security system with Easy pass access
          </Details>
        </div>
      </SmallContainer>
      {/* Body Navbar */}
      <BodyNav />
      <SmallContainer extraClasses="p-10">
        <div className="flex gap-5">
          <div className="flex-1" id="overview">
            <h1 className="text-2xl mb-5">Overview</h1>
            {/* Cost */}
            <div className="flex gap-5">
              <div>
                <p className="text-sm text-dark2">Start</p>
                <p className="text-sm text-dark font-[500]">฿4,000,000</p>
              </div>
              <Divider type="vertical h-10" />
              <div>
                <p className="text-sm text-dark2">
                  Estimated Monthly Installments
                </p>
                <p className="text-sm text-dark font-[500]">
                  ฿17,187 Month <TextRed to="#">See More Details</TextRed>
                </p>
              </div>
            </div>
            <Divider />
            {/* Room Details */}
            <div className="flex gap-5 mb-2">
              <div>
                <p className="text-sm text-dark2">Bedroom</p>
                <p className="flex items-center gap-2 text-sm text-dark font-[500]">
                  <GiBed className="text-xl" /> 3,4
                </p>
              </div>
              <div>
                <p className="text-sm text-dark2">Bathroom</p>
                <p className="flex items-center gap-2 text-sm text-dark font-[500]">
                  <GiBathtub className="text-xl" /> 3,5
                </p>
              </div>
              <div>
                <p className="text-sm text-dark2">Unit</p>
                <p className="flex items-center gap-2 text-sm text-dark font-[500]">
                  <RiCommunityFill className="text-xl" /> 123 sq.m. - 236 sq.m.
                </p>
              </div>
            </div>
            <TextRed to="#">View details of room types and prices.</TextRed>

            {/* Location */}
            <div>
              <p className="text-sm text-dark2">Location</p>
              <p className="flex items-center gap-1 text-sm text-dark font-[500]">
                <MdLocationOn className="text-xl" /> Sheria Vicinity
                Ratchaphruek - Jesadabodin : Sheria Vicinity Ratchaphruek -
                Jesadabodin, Nonthaburi
              </p>
              <p className="text-xs text-dark2 mb-3">
                Ratchaphruek - Nonthaburi Road, Bang Krang, Muang Nonthaburi,
                Nonthaburi
              </p>
              <TextRed to="/">open map</TextRed>
            </div>
            <Divider className="bg-dark2/50" />
          </div>
          <div className="w-72" id="overview">
            <div className="bg-dark/5 p-3 rounded-md">
              <img className="w-16 mx-auto" src={img4} alt="leaf" />
              <p className="text-xs my-3  text-center">
                Peace and Living Public Company Limited
              </p>
              <p className="text-left text-[0.7em] my-3">
                Please contact me about
              </p>
              <Checkbox.Group
                className="flex flex-col gap-2"
                style={{ width: "100%" }}
                onChange={handleContactAbout}
              >
                <Checkbox value="Prices, promotions and discounts">
                  Prices, promotions and discounts
                </Checkbox>
                <Checkbox value="empty unit">empty unit</Checkbox>
                <Checkbox value="room/house plan">room/house plan</Checkbox>
                <Checkbox value="brochure">brochure</Checkbox>
              </Checkbox.Group>
              <Button extraClasses="bg-danger hover:bg-danger/90 text-white mt-5">
                Let the project developer contact you back.
              </Button>
            </div>
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default SingleProperty;

const Details = ({ children, icon }) => (
  <p className="font-semibold flex items-center gap-y-20">
    <span className="sm:hidden text-2xl w-12">{icon}</span>
    {children}
  </p>
);
