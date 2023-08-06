import { Divider, InputNumber } from "antd";
import Button from "../../components/Button";
import Chart from "react-google-charts";

const HomeFinance = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    is3D: true,
  };

  return (
    <div id="homeLoan" className="py-10">
      <h1 className="text-2xl font-semibold">HomeFinance</h1>
      <div>
        <h4 className="text-center">How much will it cost to live here?</h4>
        {/* Prices */}
        <div className="sm:flex justify-center text-sm gap-5 mt-5 sm:px-20">
          {/* Footer Header */}
          <div>
            <label>Property Price</label>
            <InputNumber
              className="mt-2"
              type="number"
              addonBefore={<span>&#3647;</span>}
              placeholder="Min Price"
            />
          </div>
          <div>
            <label>Property Price</label>
            <InputNumber
              className="mt-2"
              type="number"
              addonBefore={<span>&#3647;</span>}
              placeholder="Max Price"
            />
          </div>
          <div>
            <label>Property Price</label>
            <InputNumber
              className="mt-2"
              type="number"
              addonBefore={<span>&#3647;</span>}
              placeholder="Min Price"
            />
          </div>
          <div>
            <label>Property Price</label>
            <InputNumber
              className="mt-2"
              type="number"
              addonBefore={<span>&#3647;</span>}
              placeholder="Max Price"
            />
          </div>
        </div>
        <div className="sm:flex justify-center items-center mt-10">
          <div className="sm:w-1/2 mx-auto">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
          <Divider type="vertical" className="hidden sm:block h-40" />
          <div className="sm:w-1/2 mx-auto">
            <h1 className="text-sm text-center">
              See if you qualify for this home
            </h1>
            <Button extraClasses="bg-dark2 hover:bg-dark mt-3 text-white mx-auto">
              Try detailed calculator
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFinance;
