import React from 'react';
import { Form, Input, Button } from 'antd';
import axios, { AxiosResponse } from 'axios';
import api, { User } from "../api";


interface CreateUserFormProps {
  onCreate: () => void;
  onClose: () => void;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ onCreate, onClose }) => {
  const [form] = Form.useForm();

  const createUser = (userData: Partial<User>) => {
    axios
      .post('http://localhost:3000/api/v1/users', userData)
      .then(() => {
        onCreate();
        onClose();
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  const onFinish = (values: any) => {


    createUser(values);
    form.resetFields();
  };

  return (
    <Form form={form} name="createUser" onFinish={onFinish} layout="vertical">
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          {
            type: 'email',
            message: 'The input is not a valid email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
  label="Phone Number"
  name="phoneNumber"
  rules={[
    { required: true, message: 'Please input your phone number!' },
    {
      validator: (_, value) => {
        if (!value || (/^[0-9]+$/.test(value) && value.length === 10)) {
          return Promise.resolve();
        }
        return Promise.reject('Please input a valid 10-digit phone number!');
      },
    },
  ]}
>
  <Input />
</Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateUserForm;
function validate(values: any, arg1: { groups: string[]; }) {
  throw new Error('Function not implemented.');
}

