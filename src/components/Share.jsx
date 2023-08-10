import { Tooltip } from "antd";
import { CiTwitter } from "react-icons/ci";
import { MdFacebook } from "react-icons/md";
import { PiShareFatThin } from "react-icons/pi";

const Share = () => {
  return (
    <Tooltip
      color="white"
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
      <PiShareFatThin className="text-2xl hover:bg-dark hover:text-white transition-300 border border-dark/50 rounded p-1" />
    </Tooltip>
  );
};

export default Share;
