import ImageViewer from "react-simple-image-viewer";
import SmallContainer from "../../shared/SmallContainer";
import { Breadcrumb, Divider, Tooltip } from "antd";
import { CiCircleChevRight, CiTwitter } from "react-icons/ci";
import { MdFacebook } from "react-icons/md";
import { PiHeart, PiShareFatThin } from "react-icons/pi";
import { Slide } from "react-slideshow-image";
import thumb from "../../assets/singleProjectThumb.jpg";
import { useCallback, useState } from "react";

const Details = ({ children, icon }) => (
  <p className="font-semibold flex items-center gap-x-2 gap-y-20">
    <span className="sm:hidden text-2xl w-12">{icon}</span>
    {children}
  </p>
);

const Banner = ({ breadCrumbItems, images }) => {
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
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
          <div className="flex gap-2 sm:mt-0 mt-5">
            <Share />
            {/* <PiHeartFill className="border border-dark/50 rounded p-1" /> */}
            <PiHeart className="hover:bg-dark hover:text-white border border-dark/50 text-3xl rounded p-1 transition-300 " />
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
        {images.map((item, index) => (
          <img
            onClick={() => openImageViewer(index)}
            key={index}
            src={item.img}
            className="cursor-pointer"
          />
        ))}
      </Slide>

      <SmallContainer extraClasses="p-10">
        {/* Important Details */}
        <div className="sm:flex gap-5 justify-between text-justify">
          <Details icon={<CiCircleChevRight />}>
            Good location, next to the main road, 6 lanes, 5 minutes to the BTS,
            20 minutes to Sathorn
          </Details>
          <Divider type="vertical h-20 my-auto hidden sm:block" />

          <Details icon={<CiCircleChevRight />}>
            There is a multipurpose room. downstairs to adjust functions
            according to lifestyle
          </Details>
          <Divider type="vertical h-20 my-auto hidden sm:block" />

          <Details icon={<CiCircleChevRight />}>
            Central area, large green area throughout the project Access to
            every green space
          </Details>
          <Divider type="vertical h-20 my-auto hidden sm:block" />

          <Details icon={<CiCircleChevRight />}>
            24-hour security system with Easy pass access
          </Details>
        </div>
      </SmallContainer>

      {/* Image Viewer */}
      {isViewerOpen && (
        <ImageViewer
          src={images.map((img) => img.img)}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Banner;
