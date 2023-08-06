import { Checkbox } from "antd";
import img4 from "../../assets/leaf.jpg";
import Button from "../../components/Button";
import { CiHeart, CiShare2 } from "react-icons/ci";

const StickySection = ({ handleContactAbout }) => {
  return (
    <div className="w-72 sm:sticky top-16">
      <div className="bg-dark/5 p-3 rounded-md">
        <img className="w-16 mx-auto" src={img4} alt="leaf" />
        <p className="text-xs my-3  text-center">
          Peace and Living Public Company Limited
        </p>
        <p className="text-left text-[0.7em] my-3">Please contact me about</p>
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
        <Button extraClasses="mx-auto bg-danger hover:bg-danger/90 text-white mt-5">
          Get Developer Call.
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3 text-danger mt-3">
        <div className="cursor-pointer flex items-center gap-2">
          <CiHeart className="text-xl" />
          Shortlist
        </div>
        <div className="cursor-pointer flex items-center gap-2">
          <CiShare2 />
          Share
        </div>
      </div>
    </div>
  );
};

export default StickySection;
