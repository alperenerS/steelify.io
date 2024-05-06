import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Form, Input, Button, Typography, Card, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import './resetPassword.css';

const { Title } = Typography;

const ResetPassword = () => {
    const { token } = useParams(); // Retrieve the token from the URL
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

   const handleSubmit = async () => {
    if (password !== confirmPassword) {
        message.error('Passwords do not match!');
        return;
    }

    // Preparing the data for the request
    const requestData = {
        token, // Assuming 'token' is still retrieved from useParams and used here.
        newPassword: password,
        confirmNewPasswd: confirmPassword
    };

    // Logging the request details for debugging
    console.log("Sending PUT request to URL:", 'http://localhost:3005/api/email-sender/newPasswd');
    console.log("Request Data:", requestData);

    try {
        const response = await axios.put('http://localhost:3005/api/email-sender/newPasswd', requestData);

        // Check the success flag more defensively
        if (response && response.data && response.data.success) {
            message.success('Password reset successful');
            // Additional actions such as redirecting the user can be placed here
        } else {
            // Ensure there's a default error message in case the data structure isn't as expected
            message.error('Password reset failed: ' + (response.data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Password reset request failed:', error);
        // Check if error response exists and has a data message
        if (error.response && error.response.data) {
            message.error('Password reset failed: ' + error.response.data.message);
        } else {
            message.error('Password reset failed');
        }
    }
};

    

    return (
        <div className="reset-password-container">
            <Card title="Create New Password" className="reset-password-card">
                <Form
                    name="reset_password"
                    onFinish={handleSubmit}
                    className="reset-password-form"
                    layout="vertical"
                >
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter your new password." }]}
                    >
                        <Input.Password
                            placeholder="New Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[
                            { required: true, message: "Please confirm your new password." },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            placeholder="Confirm New Password"
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="reset-password-button">
                            Set New Password
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default ResetPassword;
