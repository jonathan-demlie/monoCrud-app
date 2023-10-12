import React from "react";
import { Form, Input, Button } from 'antd';

interface UserFormProps {
  onSubmit: (values: any) => void;
  isEditing: boolean;
  initialValues?: any;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, isEditing, initialValues }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFormSubmit}
      initialValues={initialValues}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please enter a name',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: 'Please enter an email',
          },
          {
            type: 'email',
            message: 'Invalid email format',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please enter a Phone number',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEditing ? 'Update' : 'Create'} User
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserForm;
