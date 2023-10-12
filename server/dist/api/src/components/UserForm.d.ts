import React from "react";
interface UserFormProps {
    onSubmit: (values: any) => void;
    isEditing: boolean;
    initialValues?: any;
}
declare const UserForm: React.FC<UserFormProps>;
export default UserForm;
