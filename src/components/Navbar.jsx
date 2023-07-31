import brand from "../assets/brand.svg";
import thi_flag from "../assets/thiland.png";
import eng_flag from "../assets/england.png";
import Container from "../shared/Container";
import { Dropdown, Space, Modal, Button } from "antd";
import { MenuOutlined, HeartOutlined } from "@ant-design/icons";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const navItems = {
  forDesktop: [
    {
      key: 0,
      label: "Buy",
      path: "/",
    },
    {
      key: 1,
      label: "Rent",
      path: "/",
    },
    {
      key: 2,
      label: "Condos",
      path: "/",
    },
    {
      key: 3,
      label: "New Projects",
      path: "/",
    },
    {
      key: 4,
      label: "Commercial",
      path: "/",
    },
    {
      key: 5,
      label: "Guides",
      path: "/",
    },
    {
      key: 6,
      label: "Find Agents",
      path: "/",
    },
  ],
  forMobile: [
    {
      key: 7,
      label: "News",
      path: "/",
    },
    {
      key: 8,
      label: "Home Loan Tools",
      path: "/",
    },
    {
      key: 9,
      label: "Ask Guru",
      path: "/",
    },
  ],
  forAgent: [
    {
      key: 10,
      label: "Agent Offerings",
      path: "/",
    },
    {
      key: 11,
      label: "AgentNet",
      path: "/",
    },
  ],
};

const items = [
  {
    label: (
      <a href="/" className="flex items-center gap-2">
        <HeartOutlined />
        Shortlist
      </a>
    ),
    key: "0",
  },
];

const languages = [
  {
    label: (
      <a href="/" className="flex items-center gap-2">
        <img className="w-8" src={thi_flag} alt="thiland_flag" />
        TH
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a href="/" className="flex items-center gap-2">
        <img className="w-7" src={eng_flag} alt="thiland_flag" />
        EN
      </a>
    ),
    key: "1",
  },
];

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="shadow">
      <Container>
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img className="w-40" src={brand} alt="brand" />
            <div className="flex gap-2">
              {navItems.forDesktop.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="group text-sm transition duration-300"
                >
                  {item.label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-danger"></span>
                </a>
              ))}
            </div>
            <Dropdown
              className="cursor-pointer"
              menu={{
                items: [
                  ...navItems.forMobile,
                  {
                    type: "divider",
                  },
                  ...navItems.forAgent,
                ],
              }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  More
                  <BiChevronDown />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="flex gap-5">
            <Dropdown
              className="border py-1 text-sm rounded px-3 cursor-pointer"
              menu={{
                items,
              }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <MenuOutlined />
                </Space>
              </a>
            </Dropdown>

            <Button type="default" onClick={showModal}>
              Login
            </Button>

            <Dropdown
              className="border py-1 text-sm rounded px-3 cursor-pointer"
              menu={{
                items: languages,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Language
                  <BiChevronDown />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </Container>
      <Modal
        label="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ type: "default" }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Navbar;
