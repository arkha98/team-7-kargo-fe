import React, { useState, useEffect } from "react";
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
  Select,
} from "antd";
import moment from "moment";

const shipmentStatus = [
  {
    value: 1,
    label: "Ongoing to Origin",
  },
  {
    value: 2,
    label: "At Origin",
  },
  {
    value: 3,
    label: "Ongoing to Destination",
  },
  {
    value: 4,
    label: "At Destination",
  },
  {
    value: 5,
    label: "Completed",
  },
];

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAllocate, setModalAllocate] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const dateFormat = "YYYY-MM-DD";
  const today = moment().format("DD-MM-YYY");
  const [date, setDate] = useState(today);
  const [listTruck, setListTruck] = useState([]);
  const [listDriver, setListDriver] = useState([]);
  const [listShipment, setListShipment] = useState([]);
  const [selectedRow,setSelectedRow]=useState({})

  useEffect(() => {
    getListTruck();
    getListDriver()
    getListShipment()
  }, []);

  const updateStatusShipment = async(e) => {
    try {
      console.log(e)
      const body = {
        ...selectedRow,
        ...e
        
      }
      const req = await fetch("http://192.168.11.246:8080/shipment/", {
        method: "PUT",
        body:JSON.stringify(body)
      });
      const res = await req.json();
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const getListTruck = async () => {
    try {
      const req = await fetch("http://192.168.11.246:8080/truck/");
      const res = await req.json();

      // console.log(req);
      if (res.status != 200) throw "data not found";
      setListTruck(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getListDriver = async () => {
    try {
      const req = await fetch("http://192.168.11.246:8080/driver/");
      const res = await req.json();

      // console.log(req);
      if (res.status != 200) throw "data not found";
      setListDriver(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getListShipment = async () => {
    try {
      const req = await fetch("http://192.168.11.246:8080/shipment/");
      const res = await req.json();

      // console.log(req);
      if (res.status != 200) throw "data not found";
      setListShipment(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const menuItems = [
    {
      key: "1",
      label: "Allocate",
      action: () => setModalAllocate(true),
    },
    {
      key: "2",
      label: "UpdateStatus",
      action: () => setModalStatus(true),
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
      title: "Shipment",
      dataIndex: "shipment_number",
    },
    {
      title: "Licence",
      dataIndex: "license",
    },
    {
      title: "Driver's Name",
      dataIndex: "driver",
    },
    {
      title: "Origin",
      dataIndex: "origin",
    },
    {
      title: "Destination",
      dataIndex: "destination",
    },
    {
      title: "Loading Date",
      dataIndex: "loading_date",
    },
    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Action",
      dataIndex: "english",
      render: (_,data) => (
        <Dropdown overlay={menu} trigger={['click']}>
          <Button onClick={()=>setSelectedRow(data)}>Action</Button>
        </Dropdown>
      ),
    },
  ];
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleAddShipment = async (e) => {
    try {
      // const body = {
      //   ...e,
      //   loading_date:e._id
      // }
      // console.log(e)
      // console.log(body)
      const req = await fetch("http://192.168.11.246:8080/shipment/create", {
        method: "POST",
        body:JSON.stringify(e)
      })
      const res = await req.json()
      console.log(res)
      setIsModalVisible(false)
    } catch (error) {
      console.log()
    }
    // setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="p-16 flex flex-col">
      <div>
        <div className="flex justify-between mb-4">
          <Button onClick={showModal} type="primary">
            Add Shipment
          </Button>
          <div className="flex space-x-2">
            <Input placeholder="Search" />
            <Button type="primary">GO</Button>
          </div>
        </div>
      </div>
      <Modal
        title="Update Status"
        visible={modalStatus}
        
        onCancel={() => setModalStatus(false)}
        footer={[null]}
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
          onFinish={(e) => updateStatusShipment(e)}
        >
          <Form.Item label="Status" name="status">
            <Select
              name="status"
              showSearch
              filterOption={(input, option) =>
                option.children.includes(input)
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(
                    optionB.children.toLowerCase()
                  )
              }
            >
              {shipmentStatus.map((item) => (
                <Select.Option value={item.label}>
                  {item.label}
                </Select.Option>
              ))}
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
        title="Allocate"
        visible={modalAllocate}
        onOk={() => setModalAllocate(false)}
        onCancel={() => setModalAllocate(false)}
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
        >
          <Form.Item label="Truck">
            <Select
              name="truck"
              showSearch
              filterOption={(input, option) =>
                option.children.includes(input)
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(
                    optionB.children.toLowerCase()
                  )
              }
            >
              {listTruck.map((item) => (
                <Select.Option value="demo">
                  {item.license_type}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Driver">
            <Select
              name="driver"
              showSearch
              filterOption={(input, option) =>
                option.children.includes(input)
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(
                    optionB.children.toLowerCase()
                  )
              }
            >
              {listDriver.map((item) => (
                <Select.Option value="demo">
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Add Shipment"
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={[null]}
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
            loading_date: moment(),
          }}
          onFinish={(e)=>handleAddShipment(e)}
          onFinishFailed={()=>{}}
          autoComplete="off"
        >
          <Form.Item
            label="Origin"
            name="origin"
            rules={[
              {
                required: true,
                message: "Please input Origin!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Destination"
            name="destination"
            rules={[
              {
                required: true,
                message: "Please input Destination!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Loading Date" name="loading_date">
            {/* <Input.Password /> */}
            <DatePicker format="YYYY/MM/DD" />
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
      <Table columns={columns} dataSource={listShipment} onChange={onChange} />
    </div>
  );
};

export default Index;
