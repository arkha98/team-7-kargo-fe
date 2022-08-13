import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import {
  Button,
  Table,
  Input,
  Dropdown,
  Menu,
  Modal,
  Form,
  DatePicker,
  Select
} from "antd";
import moment from "moment";

const data = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAllocate, setModalAllocate] = useState(false);
  const dateFormat = "YYYY-MM-DD";
  const today = moment().format("DD-MM-YYY");
  const [date, setDate] = useState(today);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onAllocate = () => {
    setModalAllocate(true)
  }

  const menuItems = [
    {
      key: "1",
      label: "Allocate",
      action: onAllocate
    },
    {
      key: "2",
      label: "2nd item",
    },
    {
      key: "3",
      label: "3rd item",
    },
  ];
  const menu = (
    <Menu

    // onClick={onMenuClick}
    >
      {menuItems.map((item) => (
        <Menu.Item onClick={item.action}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Math Score",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "English Score",
      dataIndex: "english",
      render: () => (
        <Dropdown overlay={menu}>
          <Button>Action</Button>
        </Dropdown>
      ),
    },
  ];
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="p-16 flex flex-col">
      <div>
        <div className="flex justify-between">
          <Button onClick={showModal}>Add Shipment</Button>
          <div className="flex">
            <Input placeholder="Search" />
            <Button>GO</Button>
          </div>
        </div>
      </div>
      <Modal
        title="Allocate"
        visible={modalAllocate}
        onOk={() => setModalAllocate(false)}
        onCancel={() => setModalAllocate(false)}
      >
        <Form name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}>
          <Form.Item label="Truck">
            <Select>
              {["Truck 1", "Truck 2"].map(item =>
              <Select.Option value="demo">{item}</Select.Option>
                )}
            </Select>
          </Form.Item>
          <Form.Item label="Driver">
            <Select>
              {["Driver 1", "Driver 2"].map(item =>
              <Select.Option value="demo">{item}</Select.Option>
                )}
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Add Shipment"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Origin"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Loading Date"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Loading Date"
            name="password"

          >
            {/* <Input.Password /> */}
          </Form.Item>
          <DatePicker
          />


          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Index;
