import { Popover, Progress, Select } from "antd";
import { useEffect } from "react";
import { FaCircleInfo } from "react-icons/fa6";

const SummaryStep = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="bg-white"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          fontSize: "28px",
          marginBottom: "10px",
        }}
        className="font-semibold"
      >
        Create Listing: Summary
      </p>

      <div className="max-w-[600px]">
        <p
          style={{
            fontSize: "16px",
            marginBottom: "14px",
          }}
          className="inline-flex items-center gap-2"
        >
          Your Listing Quality Score{" "}
          <Popover
            content="When you have higher listing score, property seekers will have a higher chance seeing this listing in the search results"
            title="Listing quality score"
          >
            <FaCircleInfo />
          </Popover>
        </p>

        <div className="flex md:flex-row flex-col items-center gap-4">
          <Progress type="circle" percent={75} size={150} />
          <p>
            Aim for 100% so property seekers will have a higher chance of seeing
            this listing!
          </p>
        </div>

        <p
          style={{
            fontSize: "14px",
          }}
          className="inline-flex items-center gap-2 mt-10 pb-6"
        >
          Recommended Actions To Improve Your Score:
        </p>

        <div className="bg-[#fafafa] rounded-sm p-4 flex md:flex-row flex-col gap-2">
          <div className="flex flex-col gap-y-12 bg-white rounded-md shadow-md p-3">
            <div className="text-center">
              <p className="text-blue-600 text-[16px] font-medium">+20%</p>
              <p className="text-xs">by adding 3 photos (or more!)</p>
            </div>

            <button className="text-blue-600 hover:bg-gray-200 px-3 py-1 rounded-sm text-[16px]">
              Add
            </button>
          </div>
          <div className="flex flex-col gap-y-12 bg-white rounded-md shadow-md p-3">
            <div className="text-center">
              <p className="text-blue-600 text-[16px] font-medium">+5%</p>
              <p className="text-xs">by adding a video or a virtual tour</p>
            </div>

            <button className="text-blue-600 hover:bg-gray-200 px-3 py-1 rounded-sm text-[16px]">
              Add
            </button>
          </div>
          <div className="flex flex-col gap-y-12 bg-white rounded-md shadow-md p-3">
            <div className="text-center">
              <p className="text-blue-600 text-[16px] font-medium">+5%</p>
              <p className="text-xs">by adding in a quality description</p>
            </div>

            <button className="text-blue-600 hover:bg-gray-200 px-3 py-1 rounded-sm text-[16px]">
              Add
            </button>
          </div>
          <div className="flex flex-col gap-y-12 bg-white rounded-md shadow-md p-3">
            <div className="text-center">
              <p className="text-blue-600 text-[16px] font-medium">+5%</p>
              <p className="text-xs">by adding details about features</p>
            </div>

            <button className="text-blue-600 hover:bg-gray-200 px-3 py-1 rounded-sm text-[16px]">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;
