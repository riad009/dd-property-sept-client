import SmallContainer from "../../shared/SmallContainer";
import {
  GrAndroid,
  GrApple,
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import Divider from "../Divider";
import { Link } from "react-router-dom";
import { Select } from "antd";
import thiland from "../../assets/flags/thiland.png";
import malaysia from "../../assets/flags/malaysia.png";
import singapore from "../../assets/flags/singapore.png";
import indonesia from "../../assets/flags/indonesia.png";
import australia from "../../assets/flags/australia.png";
import vietnam from "../../assets/flags/vietnam.png";
import Search from "antd/es/transfer/search";
import brand1 from "../../assets/footer/apagf-horizontal.svg";
import brand2 from "../../assets/footer/ares-horizontal.svg";
import brand3 from "../../assets/footer/property-report.svg";
import brand4 from "../../assets/footer/thinkofliving-logo.svg";

const countries = [
  {
    value: "thiland",
    label: (
      <p className="flex gap-2 items-center">
        <img className="w-5" src={thiland} alt="thiland" />
        Thiland
      </p>
    ),
  },
  {
    value: "malaysia",
    label: (
      <p className="flex gap-2 items-center">
        <img className="w-5" src={malaysia} alt="malaysia" />
        Malaysia
      </p>
    ),
  },
  {
    value: "singapore",
    label: (
      <p className="flex gap-2 items-center">
        <img className="w-5" src={singapore} alt="singapore" />
        Singapore
      </p>
    ),
  },
  {
    value: "indonesia",
    label: (
      <p className="flex gap-2 items-center">
        <img className="w-5" src={indonesia} alt="indonesia" />
        Indonesia
      </p>
    ),
  },
  {
    value: "australia",
    label: (
      <p className="flex gap-2 items-center">
        <img className="w-5" src={australia} alt="australia" />
        Australia
      </p>
    ),
  },
  {
    value: "vietnam",
    label: (
      <p className="flex gap-2 items-center">
        <img className="w-5" src={vietnam} alt="vietnam" />
        Vietnam
      </p>
    ),
  },
];
const Footer1 = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div className="bg-dark text-white text-xs">
      {/* Socila Media */}
      <SmallContainer extraClasses="flex justify-between">
        <div className="p-5 flex items-center gap-3">
          <h1>Try Our Mobile Apps</h1>

          <Link to="/" className="flex gap-1 items-center">
            <GrAndroid />
            Android
          </Link>
          <Link to="/" className="flex gap-1 items-center">
            <GrApple />
            Apple
          </Link>
        </div>
        <div className="p-5 flex items-center gap-3">
          <h1>Follow US</h1>

          <div className="flex gap-3 items-center text-lg">
            <Link to="/">
              <GrFacebookOption />
            </Link>
            <Link to="/">
              <GrYoutube />
            </Link>
            <Link to="/">
              <GrTwitter />
            </Link>
            <Link to="/">
              <GrInstagram />
            </Link>
          </div>
        </div>
      </SmallContainer>
      <Divider />
      {/* Middle Body */}
      <SmallContainer extraClasses="sm:flex justify-between p-5">
        <div className="sm:flex gap-5">
          <div>
            <h1 className="text-[0.9rem] font-[600]">Property Guru Groups</h1>
            <ul className="flex flex-col gap-2 mt-2">
              <Link to="/">About Us</Link>
              <Link to="/">Our Products</Link>
              <Link to="/">Careers</Link>
            </ul>
          </div>
          <div className="sm:my-0 my-5">
            <h1 className="text-[0.9rem] font-[600]">Contuct Us</h1>
            <ul className="flex flex-col gap-2 mt-2">
              <Link to="/">News Room</Link>
              <Link to="/">Share feedback</Link>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-80">
          <h1 className="text-[0.9rem] font-[600]">Change Country</h1>
          <Select
            className="my-2 w-full"
            optionFilterProp="children"
            onChange={onChange}
            defaultActiveFirstOption={true}
            defaultValue="thiland"
            options={countries}
          />
          <Search placeholder="PropertyGuru Search" onSearch={onSearch} />
        </div>
      </SmallContainer>
      <Divider />
      <SmallContainer extraClasses="flex p-5 justify-between">
        <img className="w-1/4 md:w-40" src={brand4} alt="brand1" />
        <img className="w-1/4 md:w-40" src={brand1} alt="brand1" />
        <img className="w-1/4 md:w-40" src={brand2} alt="brand1" />
        <img className="w-1/12 md:w-20" src={brand3} alt="brand1" />
      </SmallContainer>
    </div>
  );
};

export default Footer1;
