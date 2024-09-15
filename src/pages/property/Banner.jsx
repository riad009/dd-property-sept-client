import ImageViewer from "react-simple-image-viewer";
import SmallContainer from "../../shared/SmallContainer";
import { Breadcrumb, Col, Divider, Row, Tooltip } from "antd";
import { CiCircleChevRight, CiTwitter } from "react-icons/ci";
import { MdOutlinePendingActions, MdVerified } from "react-icons/md";

import { useCallback, useState } from "react";

import { Carousel } from "antd";
const contentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  maxHeight: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Details = ({ children, icon }) => (
  <p className="font-semibold flex items-center gap-x-2 gap-y-20">
    <span className="sm:hidden text-2xl w-12">{icon}</span>
    {children}
  </p>
);

const Banner = ({ breadCrumbItems, images, p, coverImage }) => {
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

  const slides = [];

  // Group images into sets of 4
  for (let i = 0; i < images.length; i += 4) {
    slides.push(
      <div key={i}>
        <Row gutter={16}>
          {images.slice(i, i + 4).map((image, index) => (
            <Col span={6} key={index}>
              <div style={contentStyle}>
                <img
                  onClick={() => openImageViewer(index)}
                  src={image}
                  alt={`slide-${i + index}`}
                  className="object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto">
      <SmallContainer extraClasses="p-5">
        <Breadcrumb separator=">" items={breadCrumbItems} />

        <div className="sm:flex items-start justify-between text-xs sm:my-5 my-2"></div>
      </SmallContainer>

      {images?.length > 0 ? (
        <Carousel
          // arrows
          infinite={true}
          autoplay
          draggable
          autoplaySpeed={2000}
          className="cursor-grab "
        >
          {slides}
        </Carousel>
      ) : (
        <p className="text-center">No images</p>
      )}

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
          </Details>
          <Divider type="vertical" className="my-auto hidden sm:block" />
        </div>
      </SmallContainer>

      {isViewerOpen && (
        <ImageViewer
          backgroundStyle={{
            // position: "relative",
            zIndex: "100",
          }}
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
