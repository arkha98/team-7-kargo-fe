import { Input, Table, Select, Button, Modal, Form } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: "Driver Name",
    dataIndex: "driver_name",
    key: "driver_name",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
    key: "phone_number",
  },
  {
    title: "Created at",
    dataIndex: "create_at",
    key: "create_at",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (_, record) => (
      <Select
        showSearch
        placeholder="Update"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearchSelect}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        <Option value="update">Update</Option>
        <Option value="delete">Delete</Option>
      </Select>
    ),
  },
];
const data = [
  {
    phone_number: "1",
    driver_name: "John Brown",
    create_at: 32,
    status: "Active",
  },
  {
    phone_number: "2",
    driver_name: "Jim Green",
    create_at: 42,
    status: "Active",
  },
  {
    phone_number: "3",
    driver_name: "Joe Black",
    create_at: 32,
    status: "Inactive",
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
    <div className="h-full w-full flex flex-col space-y-5">
      <div>Driver</div>
      <div className="flex justify-end">
        {/* <Select
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
        </Select> */}
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
        </Form>
      </Modal>
    </div>
  );
}
