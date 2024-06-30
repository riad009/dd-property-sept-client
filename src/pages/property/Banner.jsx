import ImageViewer from "react-simple-image-viewer";
import SmallContainer from "../../shared/SmallContainer";
import { Breadcrumb, Divider, Tooltip } from "antd";
import { CiCircleChevRight, CiTwitter } from "react-icons/ci";
import {
  MdFacebook,
  MdOutlinePendingActions,
  MdVerified,
} from "react-icons/md";
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
        <Breadcrumb separator=">" items={breadCrumbItems} />

        <div className="sm:flex items-start justify-between text-xs sm:my-5 my-2"></div>
      </SmallContainer>

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
        {images?.map((item, index) => (
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
        {/* {
          p?.video && (
            <iframe
              width="560"
              height="315"
              src={p?.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )
          // <video
          //   // onClick={() => openImageViewer(index)}
          //   key={index}
          //   src={item}
          //   controls
          //   className="cursor-pointer"
          //   style={{
          //     width: "432px",
          //     height: "325px",
          //     objectFit: "cover",
          //   }}
          // />
        } */}
      </Slide>

      <SmallContainer extraClasses="p-2">
        <div className="sm:flex gap-5 justify-between text-justify">
          <Details icon={<CiCircleChevRight />}>
            {p.propertyName}
            {p?.isVerified ? (
              <>
                <MdVerified className="text-blue-600 text-xl" /> (Verified)
              </>
            ) : (
              <>
                <MdOutlinePendingActions className="text-red-600 text-xl" />{" "}
                (Not Verified)
              </>
            )}
            {/* {p?.status} */}
          </Details>
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
