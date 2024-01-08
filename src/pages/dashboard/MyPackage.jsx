import Search from "antd/es/input/Search";
import DashboardHeader from "./DashboardHeader";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

const MyPackage = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="p-10 bg-dark2/10">
      <div className="lg:flex items-center justify-between">
        <DashboardHeader
          title={"My Package"}
          description={"We are glad to see you again"}
        />
        <div className="flex items-center gap-3 lg:mt-0 mt-3">
          <Search placeholder="Search" allowClear />
        </div>
      </div>
      <div className="bg-white p-10 mt-5 rounded-xl">
        <table className="md:w-full min-w-[600px] mt-5">
          <tr className="bg-dark text-white text-left">
            <th className="p-2">Current Package</th>
            <th className="p-2">Properties remaining</th>
            <th className="p-2">Featured remaining</th>
            <th className="p-2">Renewal remaining</th>
            <th className="p-2">Storage Space</th>
            <th className="p-2">Expiry Date</th>
          </tr>
          <tr className="border">
            <td className="p-2">Free</td>
            <td>0</td>
            <td>3</td>
            <td>8</td>
            <td>2MB/20MB</td>
            <td>December 31, 2020</td>
          </tr>
          <tr className="border">
            <td className="p-2">Free</td>
            <td>0</td>
            <td>3</td>
            <td>8</td>
            <td>2MB/20MB</td>
            <td>December 31, 2020</td>
          </tr>
        </table>
        <div className="flex justify-end">
          <Link
            to="membership"
            className="bg-danger text-white py-2 px-4 rounded-lg mt-4"
            // onClick={() => {}}
          >
            Change Package
          </Link>
        </div>
      </div>
      <Pagination
        className="mt-5 ml-auto w-fit"
        defaultCurrent={1}
        total={50}
      />
      ;
    </div>
  );
};

export default MyPackage;
