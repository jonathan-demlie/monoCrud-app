import React from 'react';
interface CreateUserFormProps {
    onCreate: () => void;
    onClose: () => void;
}
declare const CreateUserForm: React.FC<CreateUserFormProps>;
export default CreateUserForm;
