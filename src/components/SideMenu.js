import Icon, { ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { Component, useContext } from 'react';
import AppContext from "../utils/AppContext";
import { useNavigate } from "react-router-dom";
const SideMenu = () => {
  const navigate = useNavigate()
  const { role, setRole } = useContext(AppContext)

  const items = [
    {
      key: 1,
      icon: ShoppingCartOutlined,
      label: "Dashboard"
    }
  ]

  const handleLogout = () => {
    setRole("")
    navigate("/login")
  }
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={["1"]}
        defaultSelectedKeys={["1"]}
      >
        {items.map((item, index) => (

          <Menu.Item key={item.key}>
            <div className="flex items-center">

              <Icon component={item.icon} />
              <span>{item.label}</span>
            </div>
          </Menu.Item>
        ))}
        <div onClick={handleLogout} className="cursor-pointer absolute bottom-0 px-8 py-4 hover:bg-blue-900 w-full">
          <div className="flex items-center space-x-4">

            <Icon component={LogoutOutlined} />
            <span>Logout</span>
          </div>
        </div>

      </Menu>
    </>
  );
};

export default SideMenu;