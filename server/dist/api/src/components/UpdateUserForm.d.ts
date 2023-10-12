import React from 'react';
import { User } from "../api";
interface UpdateUserFormProps {
    user: User;
    onUpdate: () => void;
    onClose: () => void;
}
declare const UpdateUserForm: React.FC<UpdateUserFormProps>;
export default UpdateUserForm;
