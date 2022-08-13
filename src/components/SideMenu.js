import Icon, { ShoppingCartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { Component } from 'react';

const SideMenu = () => {


  const items = [
    {
      key:1,
      icon: ShoppingCartOutlined,
      label: "Dashboard"
    }
  ]

  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[1]}
        
      >
        {items.map((item, index) => (

          <Menu.Item label={item.label} key={item.key}>
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