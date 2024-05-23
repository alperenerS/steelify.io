import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import ResetPasswordForm from '../../Components/ResetPassword/resetPasswordForm';
import ResetPasswordResult from '../../Components/ResetPassword/resetPasswordResult';
import './resetPassword.css';

const ResetPassword = () => {
    const { token } = useParams();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSuccess = () => {
        setIsSuccess(true);
    };

    if (isSuccess) {
        return <ResetPasswordResult />;
    }

    return (
        <div className="reset-password-container">
            <Card title="Create New Password" className="reset-password-card">
                <ResetPasswordForm token={token} onSuccess={handleSuccess} />
            </Card>
        </div>
    );
};

export default ResetPassword;
