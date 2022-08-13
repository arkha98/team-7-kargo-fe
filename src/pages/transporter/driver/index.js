import { Input, Table, Select, Button, Modal, Form } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: "License Number",
    dataIndex: "license_number",
    key: "license_number",
  },
  {
    title: "Truck Type",
    dataIndex: "truck_type",
    key: "truck_type",
  },
  {
    title: "Plate Type",
    dataIndex: "plate_type",
    key: "plate_type",
  },
  {
    title: "Production Year",
    key: "production_year",
    dataIndex: "production_year",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearchSelect = (value) => {
  console.log("search:", value);
};

export default function Driver() {
  const onSearch = (value) => console.log(value);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-12 h-full w-full flex flex-col space-y-5">
      <div>Driver</div>
      <div className="flex justify-between">
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearchSelect}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
        <div className="flex space-x-5">
          <Button type="primary" onClick={showModal}>
            Add Driver
          </Button>

          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
            allowClear
          />
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
      <Modal
        title="Add New Driver"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <Form>
          <Form.Item label="Driver Name">
            <Input placeholder="Driver Name" />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input placeholder="Phone Number" />
          </Form.Item>
          {/* <Form.Item {...buttonItemLayout}>
            <Button type="primary">Save Unit</Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </div>
  );
}
