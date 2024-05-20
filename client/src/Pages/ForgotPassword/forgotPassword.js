import React, { useState } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, CLIENT_BASE_URL } from '../../config';
import getEmailHtml from '../../EmailTemplates/ForgotPassword/forgotPasswordMailTemplate';
import ForgotPasswordForm from '../../Components/ForgotPassword/forgotPasswordForm';
import ForgotPasswordResult from '../../Components/ForgotPassword/forgotPasswordResult';
import './forgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const tokenResponse = await axios.post(`${API_BASE_URL}/email-sender/create-token`, { email });
      const { token, username } = tokenResponse.data;

      if (token && username) {
        const emailHtml = getEmailHtml(username, token, CLIENT_BASE_URL);

        const emailResponse = await axios.post(`${API_BASE_URL}/email-sender/reset-password`, {
          to: email,
          subject: 'Password Reset Request',
          html: emailHtml
        });

        if (emailResponse.data && emailResponse.data.message.includes("Successfully")) {
          setResult({
            status: 'success',
            title: 'Password Reset Link Sent',
            subTitle: 'A link to reset your password has been sent to your email.'
          });
        } else {
          throw new Error('Failed to send email');
        }
      } else {
        throw new Error('Token or username not received');
      }
    } catch (error) {
      console.error('Error during the reset password process:', error);
      setResult({
        status: 'error',
        title: 'Failed to Send Reset Email',
        subTitle: 'There was an issue sending your password reset email. Please try again.'
      });
    }
  };

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="forgot-password-container">
      {!result ? (
        <Card title="Reset Your Password" className="forgot-password-card">
          <ForgotPasswordForm onFinish={handleSubmit} onChange={setEmail} />
        </Card>
      ) : (
        <ForgotPasswordResult 
          status={result.status} 
          title={result.title} 
          subTitle={result.subTitle} 
          onBackHome={handleBackHome} 
        />
      )}
    </div>
  );
};

export default ForgotPassword;
