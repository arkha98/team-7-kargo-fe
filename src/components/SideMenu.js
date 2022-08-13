import Icon, { ShoppingCartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { Component } from 'react';

const SideMenu = () => {


  const items = [
    {
      key: 1,
      icon: ShoppingCartOutlined,
      label: "Dashboard"
    },
    {
      key: 2,
      icon: ShoppingCartOutlined,
      label: "Transporter"
    },
    {
      key: 3,
      icon: ShoppingCartOutlined,
      label: "Shipment"
    },
  ]

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

      </Menu>
    </>
  );
};

export default SideMenu;