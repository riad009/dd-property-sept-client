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

const Details = ({ children, icon }) => (
  <p className="font-semibold flex items-center gap-x-2 gap-y-20">
    <span className="sm:hidden text-2xl w-12">{icon}</span>
    {children}
  </p>
);

const Banner = ({ breadCrumbItems, images, p }) => {
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
        {/* <div className="flex items-center">
          <img className="w-20" src={thumb} alt="Thumb" />
          <h1 className="sm:text-2xl font-semibold">{p.propertyTitle} ,</h1>
        </div> */}
        {/* <h1 className="sm:text-xl text-xs">
          {p.city},{p.district} ,{p.address}
        </h1> */}
        {/* Social Media */}
        <div className="sm:flex items-start justify-between text-xs sm:my-5 my-2">
          {/* <div className="flex items-center gap-2">
            {["New Project", "townhouse", "singlehouse"].map((name, index) => (
              <span
                key={index}
                className="rounded-full border border-danger py-0.5 px-3"
              >
                {name}
              </span>
            ))}
          </div> */}
          {/* <div className="flex gap-2 sm:mt-0 mt-5">
            <Share />
            
            <PiHeart className="hover:bg-dark hover:text-white border border-dark/50 text-3xl rounded p-1 transition-300 " />
          </div> */}
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
            src={item}
            className="cursor-pointer"
            style={{
              width: "432px",
              height: "325px",
              objectFit: "cover",
            }}
          />
        ))}
        {p?.videos?.map((item, index) => (
          <video
            // onClick={() => openImageViewer(index)}
            key={index}
            src={item}
            controls
            className="cursor-pointer"
            style={{
              width: "432px",
              height: "325px",
              objectFit: "cover",
            }}
          />
        ))}
      </Slide>

      <SmallContainer extraClasses="p-2">
        <div className="sm:flex gap-5 justify-between text-justify">
          <Details icon={<CiCircleChevRight />}>{p.headline}</Details>
          <Divider type="vertical  my-auto hidden sm:block" />
        </div>
      </SmallContainer>

      {/* Image Viewer */}
      {isViewerOpen && (
        <ImageViewer
          src={images.map((img) => img)}
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
