import React from "react";
import Chart from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];
const GeoChart = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-lg p-5">
      <p>Visitor Statistics</p>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="100%"
        data={data}
      />
    </div>
  );
};

export default GeoChart;
