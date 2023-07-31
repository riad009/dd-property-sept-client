import thi_flag from "../assets/thiland.png";
import eng_flag from "../assets/england.png";
import Container from "../shared/Container";
import { Dropdown, Space, Modal, Button, Divider } from "antd";
import { MenuOutlined, HeartOutlined } from "@ant-design/icons";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import Brand from "./Brand";
import NavItem from "./NavItem";

const ShortList = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <HeartOutlined />
      Shortlist
    </a>
  );
};

export const navItems = {
  forDesktop: [
    {
      key: 0,
      label: "Buy",
      path: "/",
      icon: <BiChevronDown />,
    },
    {
      key: 1,
      label: "Rent",
      path: "/",
      icon: <BiChevronDown />,
    },
    {
      key: 2,
      label: "Condos",
      path: "/",
      icon: <BiChevronDown />,
    },
    {
      key: 3,
      label: "New Projects",
      path: "/",
      icon: <BiChevronDown />,
    },
    {
      key: 4,
      label: "Commercial",
      path: "/",
      icon: <BiChevronDown />,
    },
    {
      key: 5,
      label: "Guides",
      path: "/",
      icon: <BiChevronDown />,
    },
    {
      key: 6,
      label: "Find Agents",
      path: "/",
      icon: <BiChevronDown />,
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

export const items = [
  {
    label: <ShortList />,
    key: "0",
  },
];

export const languages = [
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

export const allItems = [
  ...navItems.forDesktop,
  ...navItems.forMobile,
  navItems.forAgent,
];

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

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
    <div className="shadow z-10 relative transition-all duration-300">
      <Container>
        <div className="p-5">
          <div className="flex items-center">
            <MenuOutlined
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden md:inline"
            />
            <Brand medium />
          </div>
          <div className="hidden w-full lg:flex lg:items-center">
            <div className="w-full lg:flex items-center gap-5">
              <Brand />
              <div className="lg:flex items-center gap-2">
                {navItems.forDesktop.map((item) => (
                  <NavItem
                    key={item.key}
                    href={item.path}
                    label={item.label}
                    icon={item.icon}
                  />
                ))}
                <Dropdown
                  className="lg:block hidden text-sm cursor-pointer"
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
            </div>
            <div className="lg:flex gap-5">
              <Dropdown
                className="lg:block md:hidden border py-1 text-sm rounded px-3 cursor-pointer"
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

              <Button
                className="lg:block md:hidden"
                type="default"
                onClick={showModal}
              >
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

          {/* TODO:Add Transition Animation */}
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="absolute flex top-[70px] lg:hidden w-full left-0">
              <div className={`bg-white flex flex-col left-0 sm:w-[360px]`}>
                <div className="bg-danger px-3 text-sm py-7 text-white">
                  <div
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="cursor-pointer transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <p>Quick Links</p>
                      {accordionOpen ? <BiChevronDown /> : <BiChevronRight />}
                    </div>
                  </div>
                  {/* TODO:Add Transition Animation */}
                  {accordionOpen && (
                    <div className="h-0 p-3">
                      <ShortList />
                    </div>
                  )}
                  <Divider className="bg-white" />
                  <p className="text-[11px]">
                    Personalize your search & get unlimited access to features
                  </p>
                  <Button className="bg-white w-full mt-2 border-none">
                    Login/Create Account
                  </Button>
                </div>
                <div className="p-1">
                  {allItems.map((item) => (
                    <NavItem
                      key={item.key}
                      href={item.path}
                      label={item.label}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-grow bg-dark bg-opacity-50"></div>
            </div>
          )}
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
