import { Tabs } from "antd";
import React from "react";

const AvailableUnitSection = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `1 Bedroom`,
      children: `Content of Tab Pane 1`,
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
    <div id="roomLayout">
      AvailableUnitSection
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} tab />
    </div>
  );
};

export default AvailableUnitSection;
