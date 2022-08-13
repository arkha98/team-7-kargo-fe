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
];
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
	const [modalStatus, setModalStatus] = useState(false);
	const dateFormat = "YYYY-MM-DD";
	const today = moment().format("DD-MM-YYY");
	const [date, setDate] = useState(today);
	const [listTruck, setListTruck] = useState([]);

	useEffect(() => {
		getListTruck();
	}, []);

	const getListTruck = async () => {
		try {
			const req = await fetch("http://192.168.11.246:8080/truck/");
			const res = await req.json();

			// console.log(req);
			if (res.status !== 200) throw "data not found";
			setListTruck(res.data);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};
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
		setModalAllocate(true);
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
				onOk={() => setModalStatus(false)}
				onCancel={() => setModalStatus(false)}
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
					<Form.Item label="Status">
						<Select
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
								<Select.Option value="demo">
									{item.label}
								</Select.Option>
							))}
						</Select>
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
							{["Driver 1", "Driver 2"].map((item) => (
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
						date: moment(),
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
						label="Destination"
						name="destination"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item label="Loading Date" name="date">
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
			<Table columns={columns} dataSource={data} onChange={onChange} />
		</div>
	);
};

export default Index;
