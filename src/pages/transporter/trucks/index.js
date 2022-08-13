import { Input, Table, Select } from "antd";
import React from "react";
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

export default function Trucks() {
  const onSearch = (value) => console.log(value);

  return (
    <div className="p-12 h-full w-full flex flex-col space-y-5">
      <div>Trucks</div>
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
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
          allowClear
        />
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
