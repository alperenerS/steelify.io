import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ResetPasswordResult = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="success"
            title="Your password has been reset successfully!"
            subTitle="Your password has been updated. You can now log in with your new password."
            extra={[
                <Button type="primary" key="login" onClick={() => navigate('/login')}>
                    Return to Login
                </Button>
            ]}
        />
    );
};

export default ResetPasswordResult;
