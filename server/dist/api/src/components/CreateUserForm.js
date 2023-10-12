"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const axios_1 = require("axios");
const CreateUserForm = ({ onCreate, onClose }) => {
    const [form] = antd_1.Form.useForm();
    const createUser = (userData) => {
        axios_1.default
            .post('http://localhost:3000/api/v1/users', userData)
            .then(() => {
            onCreate();
            onClose();
        })
            .catch((error) => {
            console.error('Error creating user:', error);
        });
    };
    const onFinish = (values) => {
        createUser(values);
        form.resetFields();
    };
    return (<antd_1.Form form={form} name="createUser" onFinish={onFinish} layout="vertical">
    <antd_1.Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
      <antd_1.Input />
    </antd_1.Form.Item>
    <antd_1.Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
      <antd_1.Input />
    </antd_1.Form.Item>
    <antd_1.Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
      <antd_1.Input.Password />
    </antd_1.Form.Item>
    <antd_1.Form.Item label="Phone Number" name="phoneNumber" rules={[
            { required: true, message: 'Please input your phone number!' },
            { len: 10, message: 'Phone number must be 10 characters long' },
        ]}>
      <antd_1.Input />
    </antd_1.Form.Item>
    <antd_1.Form.Item>
      <antd_1.Button type="primary" htmlType="submit">
        Create User
      </antd_1.Button>
    </antd_1.Form.Item>
  </antd_1.Form>);
};
exports.default = CreateUserForm;
function validate(values, arg1) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=CreateUserForm.js.map