"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const UserForm = ({ onSubmit, isEditing, initialValues }) => {
    const [form] = antd_1.Form.useForm();
    const handleFormSubmit = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(values);
            form.resetFields();
        }
        catch (error) {
            console.error('Error:', error);
        }
    };
    return (<antd_1.Form form={form} layout="vertical" onFinish={handleFormSubmit} initialValues={initialValues}>
      <antd_1.Form.Item name="name" label="Name" rules={[
            {
                required: true,
                message: 'Please enter a name',
            },
        ]}>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item name="email" label="Email" rules={[
            {
                required: true,
                message: 'Please enter an email',
            },
            {
                type: 'email',
                message: 'Invalid email format',
            },
        ]}>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item name="phoneNumber" label="Phone Number" rules={[
            {
                required: true,
                message: 'Please enter a Phone number',
            },
        ]}>
        <antd_1.Input />
      </antd_1.Form.Item>
      <antd_1.Form.Item>
        <antd_1.Button type="primary" htmlType="submit">
          {isEditing ? 'Update' : 'Create'} User
        </antd_1.Button>
      </antd_1.Form.Item>
    </antd_1.Form>);
};
exports.default = UserForm;
//# sourceMappingURL=UserForm.js.map