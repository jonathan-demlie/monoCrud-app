"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const axios_1 = require("axios");
const UpdateUserForm = ({ user, onUpdate, onClose }) => {
    const [form] = antd_1.Form.useForm();
    const updateUser = (userId, userData) => {
        axios_1.default
            .put(`http://localhost:3000/api/v1/users/${userId}`, userData)
            .then(() => {
            onUpdate();
            onClose();
        })
            .catch((error) => {
            console.error('Error updating user:', error);
        });
    };
    return (<antd_1.Form form={form} name="updateUser" onFinish={(values) => updateUser(user.id, values)} initialValues={user} layout='vertical'>
      <antd_1.Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <antd_1.Input.Password />
      </antd_1.Form.Item>
      <antd_1.Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Please input your phone number!' }]}>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item>
        <antd_1.Button type="primary" htmlType="submit">
          Update User
        </antd_1.Button>
      </antd_1.Form.Item>
    </antd_1.Form>);
};
exports.default = UpdateUserForm;
//# sourceMappingURL=UpdateUserForm.js.map