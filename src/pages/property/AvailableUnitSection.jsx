import { Tabs } from "antd";
import { useCallback, useState } from "react";
import { GiBathtub, GiBed } from "react-icons/gi";
import { MdChevronRight } from "react-icons/md";
import { MdGridView } from "react-icons/md";
import ImageViewer from "react-simple-image-viewer";

const AvailableUnitSection = ({ images }) => {
  const onChange = (key) => {
    console.log(key);
  };

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

  const items = [
    {
      key: "1",
      label: <p className="text-dark">1 Bedroom</p>,
      children: (
        <Tabs
          tabPosition="left"
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: (
                <div className="text-dark">
                  <h6>Studio – Mountain BLD C</h6>
                  <p>30sqm</p>
                </div>
              ),
              key: id,
              children: (
                <div>
                  <div className="flex gap-3 items-center">
                    <h3 className="font-semibold">฿3,939,000</h3>
                    <span className="bg-dark2/10 text-[0.7em] px-2 rounded">
                      Starting from
                    </span>
                  </div>
                  <div className="flex gap-5 my-2">
                    <div>
                      <p className="flex items-center gap-2 text-sm text-dark font-[500]">
                        1 <GiBed className="text-xl" />
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-sm text-dark font-[500]">
                        1 <GiBathtub className="text-xl" />
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-sm text-dark font-[500]">
                        ฿131,300 / sqm
                      </p>
                    </div>
                  </div>
                  <h1 className="my-2">
                    <b>Furnishing:</b> Unfurnished
                  </h1>
                  <p className="cursor-pointer font-semibold text-danger flex items-center">
                    View Floor Plan <MdChevronRight className="text-lg" />
                  </p>
                  <div className="relative transition-300 hover:scale-105">
                    <img
                      className="cursor-pointer py-5"
                      onClick={() => openImageViewer(0)}
                      src={images[0].img}
                      alt="design"
                    />
                    <MdGridView className="text-white absolute top-10 right-5 text-2xl" />
                  </div>
                </div>
              ),
            };
          })}
        />
      ),
    },
    {
      key: "2",
      label: <p className="text-dark">2 Bedroom</p>,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: <p className="text-dark">3 Bedroom</p>,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div id="roomLayout" className="my-10">
      <h1 className="text-2xl">Available Unit Section</h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} tab />
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

export default AvailableUnitSection;
