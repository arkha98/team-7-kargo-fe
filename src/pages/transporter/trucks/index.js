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
    license_number: "1",
    truck_type: "John Brown",
    production_year: 32,
    plate_type: "New York No. 1 Lake Park",
  },
  {
    license_number: "2",
    truck_type: "Jim Green",
    production_year: 42,
    plate_type: "London No. 1 Lake Park",
  },
  {
    license_number: "3",
    truck_type: "Joe Black",
    production_year: 32,
    plate_type: "Sidney No. 1 Lake Park",
  },
];

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearchSelect = (value) => {
  console.log("search:", value);
};

export default function Trucks() {
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
      <div>Trucks</div>
      <div className="flex justify-between">
        <Select
          showSearch
          placeholder="Truck Type"
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
            Add Truck
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
        title="Add New Unit"
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
          <Form.Item label="License Number">
            <Input placeholder="License Number" />
          </Form.Item>
          <Form.Item label="License Type">
            <Select>
              <Select.Option value="yellow">Yellow</Select.Option>
              <Select.Option value="black">Black</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Truck Type">
            <Select>
              <Select.Option value="tronton">Tronton</Select.Option>
              <Select.Option value="box">Box</Select.Option>
              <Select.Option value="pick_up">Pick Up</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Production Year">
            <Input placeholder="Production Year" />
          </Form.Item>
          <Form.Item label="STNK">
            <Input type="file" placeholder="STNK" />
          </Form.Item>
          <Form.Item label="KIR">
            <Input type="file" placeholder="KIR" />
          </Form.Item>
          {/* <Form.Item {...buttonItemLayout}>
            <Button type="primary">Save Unit</Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </div>
  );
}
