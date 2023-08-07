import { Button, Dropdown, Select, Space } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";

const RightSide = ({
  items,
  showModal,
  currentUser,
  itemsUser,
  languageHandler,
  languages,
}) => {
  return (
    <div className="flex lg:gap-5 gap-2">
      <Dropdown
        className="w-10 border py-1 text-sm rounded px-3 cursor-pointer"
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
          <Button className="" type="default" onClick={showModal}>
            Login
          </Button>
        ) : (
          <Dropdown
            className="w-40 lg:mx-auto border py-1 text-sm rounded px-3 cursor-pointer"
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
  );
};

export default RightSide;
