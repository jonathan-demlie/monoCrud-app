"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const CreateUserForm_1 = require("./CreateUserForm");
const UpdateUserForm_1 = require("./UpdateUserForm");
const icons_1 = require("@ant-design/icons");
const api_1 = require("../api");
require("../App.css");
const { confirm } = antd_1.Modal;
const UserList = () => {
    const [users, setUsers] = (0, react_1.useState)([]);
    const [isCreateModalVisible, setIsCreateModalVisible] = (0, react_1.useState)(false);
    const [selectedUser, setSelectedUser] = (0, react_1.useState)(null);
    const fetchUserList = () => {
        api_1.default.get('/users')
            .then((response) => {
            setUsers(response.data);
        })
            .catch((error) => {
            console.error('Error fetching user list:', error);
        });
    };
    (0, react_1.useEffect)(() => {
        fetchUserList();
    }, []);
    const showDeleteConfirmation = (user) => {
        confirm({
            title: 'Do you want to delete this user?',
            icon: <icons_1.ExclamationCircleOutlined />,
            content: 'This action cannot be undone.',
            onOk() {
                api_1.default.delete(`/users/${user.id}`)
                    .then(() => {
                    fetchUserList();
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
            render: (text, user) => (<antd_1.Space size="middle">
          <antd_1.Button type="primary" onClick={() => setSelectedUser(user)}>Edit</antd_1.Button>
          <antd_1.Button type="default" className="custom-button" onClick={() => showDeleteConfirmation(user)}>Delete</antd_1.Button>
        </antd_1.Space>),
        },
    ];
    return (<div className='user-list'>
      <h1>User List</h1>
     <div className='btn1'>
     <antd_1.Button type="primary" onClick={() => setIsCreateModalVisible(true)}>
        Create User
      </antd_1.Button>
     </div>
      <antd_1.Table dataSource={users} columns={columns} rowKey="id"/>

      {isCreateModalVisible && (<antd_1.Modal title="Create User" visible={isCreateModalVisible} onCancel={() => setIsCreateModalVisible(false)} footer={null}>
          <CreateUserForm_1.default onClose={() => setIsCreateModalVisible(false)} onCreate={() => {
                fetchUserList();
                setIsCreateModalVisible(false);
            }}/>
        </antd_1.Modal>)}

      {selectedUser && (<antd_1.Modal title="Update User" visible={!!selectedUser} onCancel={() => setSelectedUser(null)} footer={null}>
          <UpdateUserForm_1.default user={selectedUser} onUpdate={fetchUserList} onClose={() => setSelectedUser(null)}/>
        </antd_1.Modal>)}
    </div>);
};
exports.default = UserList;
//# sourceMappingURL=UserList.js.map