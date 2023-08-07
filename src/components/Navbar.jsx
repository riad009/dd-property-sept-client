import thi_flag from "../assets/thiland.png";
import eng_flag from "../assets/england.png";
import Container from "../shared/Container";
import { Dropdown, Space, Button, Divider, Select } from "antd";
import {
  MenuOutlined,
  HeartOutlined,
  CloseOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { BsBuildingAdd, BsBuildingsFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiPhoneFindFill } from "react-icons/ri";
import { useState } from "react";
import Brand from "./Brand";
import NavItem from "./NavItem";
import { useAuth } from "../providers/AuthProvider";
import { Link, useHref } from "react-router-dom";
import LoginModal from "./LoginModal";

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
      icon: <SearchOutlined />,
    },
    {
      key: 1,
      label: "Rent",
      path: "/",
      icon: <SearchOutlined />,
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
      icon: <BsBuildingAdd />,
    },
    {
      key: 4,
      label: "Commercial",
      path: "/",
      icon: <BsBuildingsFill />,
    },
    {
      key: 5,
      label: "Guides",
      path: "/",
      icon: <HiOutlineLightBulb className="text-xl" />,
    },
    {
      key: 6,
      label: "Find Agents",
      path: "/",
      icon: <RiPhoneFindFill className="text-xl" />,
    },
  ],
  forMobile: [
    {
      key: 7,
      label: "News",
      path: "/",
      icon: <SearchOutlined />,
    },
    {
      key: 8,
      label: "Home Loan Tools",
      path: "/",
      icon: <SearchOutlined />,
    },
    {
      key: 9,
      label: "Ask Guru",
      path: "/",
      icon: <SearchOutlined />,
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
    key: "0",
    label: <ShortList />,
  },
];

export const languages = [
  {
    value: "th",
    label: (
      <p className="flex gap-2 items-center">
        <img className="w-5" src={thi_flag} alt="thiland" />
        TH
      </p>
    ),
  },
  {
    value: "en",
    label: (
      <p className="flex gap-2 items-center">
        <img className="w-5" src={eng_flag} alt="malaysia" />
        EN
      </p>
    ),
  },
];

export const allItems = [
  ...navItems.forDesktop,
  ...navItems.forMobile,
  navItems.forAgent,
];

const Navbar = () => {
  // check current user
  const { currentUser, logout } = useAuth();

  const path = useHref();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const languageHandler = (e) => {
    console.log(e.target.value);
  };

  const itemsUser = [
    {
      key: "0",
      label: <Link to="/">Profile</Link>,
    },
    {
      key: "1",
      label: <Link to="/">Email Preferences</Link>,
    },
    {
      key: "2",
      label: <Link to="/">Ask Guru asked Questions</Link>,
    },
    {
      key: "3",
      label: <Link to="/">Feedback</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: <h1 onClick={logout}>Logout</h1>,
    },
  ];

  return (
    <div className="shadow z-10 relative transition-all duration-300">
      <Container>
        <div className="p-6">
          <div className="flex items-center">
            {!sidebarOpen ? (
              <MenuOutlined
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden md:inline"
              />
            ) : (
              <CloseOutlined
                className="lg:hidden md:inline"
                onClick={() => setSidebarOpen(false)}
              />
            )}
            <Brand medium />
          </div>
          <div className="hidden w-full lg:flex lg:items-center">
            <div className="w-full lg:flex items-center gap-5">
              {path !== "/dashboard" && <Brand />}
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
                      {
                        key: navItems.length + 1,
                        label: <h1 className="font-semibold">For Agent</h1>,
                        disabled: true,
                        path: "/",
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

              <div className="flex items-center">
                {!currentUser ? (
                  <Button
                    className="lg:block md:hidden"
                    type="default"
                    onClick={showModal}
                  >
                    Login
                  </Button>
                ) : (
                  <Dropdown
                    className="lg:block w-40 mx-auto md:hidden border py-1 text-sm rounded px-3 cursor-pointer"
                    menu={{
                      items: itemsUser,
                    }}
                    trigger={["click"]}
                    placement="bottomLeft"
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <UserOutlined />
                        My Account
                        <MenuOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                )}
              </div>

              <Select
                className="w-32"
                optionFilterProp="children"
                onChange={languageHandler}
                defaultActiveFirstOption={true}
                defaultValue="thiland"
                options={languages}
              />
            </div>
          </div>

          {/* TODO:Add Transition Animation */}
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="absolute flex top-[70px] lg:hidden w-full left-0">
              <div
                className={`bg-white flex flex-col left-0 sm:w-[360px] w-full`}
              >
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
                  {allItems.map((item, index) => (
                    <NavItem
                      key={index}
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
      <LoginModal handleCancel={handleCancel} isModalOpen={isModalOpen} />
    </div>
  );
};

export default Navbar;
