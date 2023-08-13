import Search from "antd/es/input/Search";
import img1 from "../../assets/banner1.jpg";
import DashboardHeader from "./DashboardHeader";
import { Pagination, Select } from "antd";
import { MdDelete } from "react-icons/md";

const MyFavorites = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="p-10">
      <div className="lg:flex items-center justify-between">
        <DashboardHeader
          title={"My Properties"}
          description={"We are glad to see you again"}
        />
        <div className="flex items-center gap-3 lg:mt-0 mt-3">
          <Search placeholder="Search" allowClear />
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
      </div>
      <table className="md:w-full min-w-[600px] mt-5">
        <tr className="border">
          <td className="p-2 flex gap-3 items-center">
            <img className="w-40 inline rounded-lg" src={img1} alt="cover" />
            <div>
              <h1 className="font-semibold">Luxury Family Home</h1>
              <p className="text-xs">Address: Lorem, ipsum dolor.</p>
              <p className="text-danger font-semibold">130000</p>
            </div>
          </td>
          <td>
            <div className="flex gap-2 text-danger">
              <MdDelete className="bg-danger/10 p-1 text-2xl rounded-md" />
            </div>
          </td>
        </tr>
        <tr className="border">
          <td className="p-2 flex gap-3 items-center">
            <img className="w-40 inline rounded-lg" src={img1} alt="cover" />
            <div>
              <h1 className="font-semibold">Luxury Family Home</h1>
              <p className="text-xs">Address: Lorem, ipsum dolor.</p>
              <p className="text-danger font-semibold">130000</p>
            </div>
          </td>
          <td>
            <div className="flex gap-2 text-danger">
              <MdDelete className="bg-danger/10 p-1 text-2xl rounded-md" />
            </div>
          </td>
        </tr>
      </table>
      <Pagination
        className="mt-5 mx-auto w-fit"
        defaultCurrent={1}
        total={50}
      />
      ;
    </div>
  );
};

export default MyFavorites;
