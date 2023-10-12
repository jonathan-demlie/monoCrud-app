import React from 'react';
import { Form, Input, Button } from 'antd';
import axios, { AxiosResponse } from 'axios';
import api , {User} from "../api";



interface UpdateUserFormProps {
  user: User;
  onUpdate: () => void;
  onClose: () => void;
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ user, onUpdate, onClose }) => {
  const [form] = Form.useForm();

  const updateUser = (userId: number, userData: Partial<User>) => {
    axios
      .put(`http://localhost:3000/api/v1/users/${userId}`, userData)
      .then(() => {
        onUpdate();
        onClose();
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <Form form={form} name="updateUser" onFinish={(values) => updateUser(user.id, values)} initialValues={user} layout='vertical'>
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
          Update User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateUserForm;
