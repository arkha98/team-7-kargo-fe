import React from 'react'
import SideMenu from "../../components/SideMenu"
import { Button, Table, Input, Dropdown, Menu } from 'antd';


const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];



const index = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const menuItems = [
    {
      key: '1',
      label: '1st item',
    },
    {
      key: '2',
      label: '2nd item',
    },
    {
      key: '3',
      label: '3rd item',
    },
  ]
  const menu = (
    <Menu

    // onClick={onMenuClick}

    >
      {menuItems.map(item => (
        <Menu.Item>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      render: () => (
        <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
      )
    },
  ];
  return (
    <div className="p-16 flex flex-col">
      <div>
        <div className="flex justify-between">
          <Button>Add Shipment</Button>
          <div className="flex">

            <Input placeholder="Search" />
            <Button>GO</Button>
          </div>
        </div>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />

    </div>
  )
}

export default index
