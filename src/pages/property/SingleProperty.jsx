import { Breadcrumb } from "antd";
import SmallContainer from "../../shared/SmallContainer";
import { useParams } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { PiShareFatThin, PiHeart, PiHeartFill } from "react-icons/pi";
import thumb from "../../assets/singleProjectThumb.jpg";

const SingleProperty = () => {
  const { projectName } = useParams();

  const breadCrumbItems = [
    {
      href: "/",
      title: <HomeOutlined />,
    },
    {
      title: "Property",
      href: "/",
    },
    {
      title: "Projects",
      href: "/",
    },
    {
      title: projectName,
    },
  ];

  return (
    <div className="p-5">
      <SmallContainer>
        <Breadcrumb separator=">" items={breadCrumbItems} />
        <div className="flex items-center">
          <img className="w-20" src={thumb} alt="Thumb" />
          <h1 className="text-2xl font-semibold">
            Sheria Vicinity Ratchaphruek - Jesadabodin : Sheria Vicinity
            Ratchaphruek - Jesadabodin, Nonthaburi
          </h1>
        </div>
        <h1>
          Premium New Project Next To The Main Road, 6 Lanes, On The Location Of
          Ratchaphruek - Nonthaburi 1
        </h1>
        <div className="flex items-start justify-between text-xs mt-2">
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
          <div className="text-3xl flex gap-2">
            <PiShareFatThin className="hover:bg-dark hover:text-white transition-300 border border-dark/50 rounded p-1" />
            {/* <PiHeartFill className="border border-dark/50 rounded p-1" /> */}
            <PiHeart className="hover:bg-dark hover:text-white border border-dark/50 rounded p-1 transition-300 " />
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default SingleProperty;
