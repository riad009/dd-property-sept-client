import { Tabs } from "antd";
import { GiBathtub, GiBed } from "react-icons/gi";
import { MdChevronRight } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";

const AvailableUnitSection = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `1 Bedroom`,
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
                  <p className="text-danger flex items-center">
                    View Floor Plan <MdChevronRight className="text-lg" />
                  </p>
                </div>
              ),
            };
          })}
        />
      ),
    },
    {
      key: "2",
      label: `2 Bedrooms`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `3 Bedrooms`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div id="roomLayout" className="my-10">
      <h1 className="text-2xl">AvailableUnitSection</h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} tab />
    </div>
  );
};

export default AvailableUnitSection;
