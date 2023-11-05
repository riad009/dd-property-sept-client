import ImageViewer from "react-simple-image-viewer";
import SmallContainer from "../../shared/SmallContainer";
import { Breadcrumb, Divider, Tooltip } from "antd";
import { CiCircleChevRight, CiTwitter } from "react-icons/ci";
import { MdFacebook } from "react-icons/md";
import { PiHeart, PiShareFatThin } from "react-icons/pi";
import { Slide } from "react-slideshow-image";
import thumb from "../../assets/singleProjectThumb.jpg";
import { useCallback, useState } from "react";
import Share from "../../components/Share";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const Details = ({ children, icon }) => (
//   <p className="font-semibold flex items-center gap-x-2 gap-y-20">
//     <span className="sm:hidden text-2xl w-12">{icon}</span>
//     {children}
//   </p>
// );

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = ({ propertyTitle,  carouselImages,location,propertyType }) => {
  console.log(location)
  const {address,city,country,state}=location || {}

  return (
    <div>
      <SmallContainer extraClasses="p-5">
        {/* Navigations */}
        {/* <Breadcrumb separator=">" items={breadCrumbItems} /> */}
        {/* Header */}
        <div className="flex items-center">
          {/* <img className="w-20" src={thumb} alt="Thumb" /> */}
          <h1 className="sm:text-2xl font-semibold">
            {propertyTitle}
          </h1>
        </div>
        <h1 className="sm:text-xl text-xs capitalize">
          {address},{city},{country}
        </h1>
        {/* Social Media */}
        <div className="sm:flex items-start justify-between text-xs sm:my-5 my-2">
          <div className="flex items-center gap-2">
          <span
                className="rounded-full border border-danger py-0.5 px-3"
              >
                {propertyType}
              </span>
          </div>
          
        </div>
      </SmallContainer>
      {/* Image Gallery */}
      {
        carouselImages && 
        <Carousel 
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        >
          {
            carouselImages && carouselImages?.map((url,index)=>(
              <img className="h-[400px]" key={index} src={url} />
            ))
          }
        </Carousel>
      }
    </div>
  );
};

export default Banner;
