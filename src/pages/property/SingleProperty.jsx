import { Breadcrumb, Tooltip } from "antd";
import SmallContainer from "../../shared/SmallContainer";
import { useParams } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { PiShareFatThin, PiHeart, PiHeartFill } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { MdFacebook } from "react-icons/md";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";

import thumb from "../../assets/singleProjectThumb.jpg";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

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
    </div>
  );
};

export default SingleProperty;
