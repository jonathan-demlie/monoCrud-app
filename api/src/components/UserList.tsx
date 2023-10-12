import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Modal } from 'antd';
import axios, { AxiosResponse } from 'axios';
import CreateUserForm from './CreateUserForm';
import UpdateUserForm from './UpdateUserForm';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import api , {User} from "../api";

import  '../App.css';

const { confirm } = Modal;

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const fetchUserList = () => {
    api.get('/users')
      .then((response: AxiosResponse<User[]>) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user list:', error);
      });
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const showDeleteConfirmation = (user: User) => {
    confirm({
      title: 'Do you want to delete this user?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk() {
        api.delete(`/users/${user.id}`)
          .then(() => {
            fetchUserList(); // Refresh the user list after deletion
          })
          .catch((error) => {
            console.error('Error deleting user:', error);
          });
      },
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, user: User) => (
        <Space size="middle">
          <Button  type="primary" onClick={() => setSelectedUser(user)}>Edit</Button>
          <Button  type="default"className="custom-button"  onClick={() => showDeleteConfirmation(user)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className='user-list'>
      <h1>User List</h1>
     <div className='btn1'>
     <Button  type="primary" onClick={() => setIsCreateModalVisible(true)}>
        Create User
      </Button>
     </div>
      <Table dataSource={users} columns={columns} rowKey="id" />
      {isCreateModalVisible && (
        <Modal
          title="Create User"
          visible={isCreateModalVisible}
          onCancel={() => setIsCreateModalVisible(false)}
          footer={null}
        >
          <CreateUserForm onClose={() =>
           setIsCreateModalVisible(false)}
           onCreate={() => {
            fetchUserList();
            setIsCreateModalVisible(false);
          }
          } 
          />
        </Modal>
      )}

      {selectedUser && (
        <Modal
          title="Update User"
          visible={!!selectedUser}
          onCancel={() => setSelectedUser(null)}
          footer={null}
        >
          <UpdateUserForm user={selectedUser} onUpdate={fetchUserList} onClose={() => setSelectedUser(null)} />
        </Modal>
      )}
    </div>
  );
};

export default UserList;
