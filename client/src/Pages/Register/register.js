import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterCard from "../../Components/Register/registerCard";
import {
  showRegistrationSuccess,
  showRegistrationError,
  showAgreementError,
} from "../../Components/Register/registerNotification";
import { API_BASE_URL, CLIENT_BASE_URL } from "../../config";
import getWelcomeEmailHtml from '../../EmailTemplates/Registiration/welcomeMailTemplate';
import getNewUserRegistrationToAdminEmailHtml from '../../EmailTemplates/Registiration/newUserRegistrationToAdminTemplate';

const Register = () => {
  const navigate = useNavigate();

  const sendEmails = async (values) => {
    const emailHtml = getWelcomeEmailHtml(values.name, CLIENT_BASE_URL);
    const adminEmailHtml = getNewUserRegistrationToAdminEmailHtml(values);
  
    await Promise.all([
      axios.post(`${API_BASE_URL}/email-sender/welcome`, {
        to: values.email,
        subject: 'Welcome to Steelify',
        html: emailHtml
      }).catch(error => console.error("Failed to send welcome email:", error)),
  
      axios.post(`${API_BASE_URL}/email-sender/new-user-registration`, {
        to: 'emre@yenaengineering.nl',
        subject: 'New User Registration',
        html: adminEmailHtml
      }).catch(error => console.error("Failed to send admin notification email:", error))
    ]);
  };
  

  const handleSubmit = async (values) => {
  if (!values.agreement) {
    showAgreementError();
    return;
  }


  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      email: values.email,
      password: values.password,
      userType: values.userType,
      website: values.website,
      name: values.name,
      surname: values.surname,
    });

    if (response.data) {
      showRegistrationSuccess(response.data.message);
      navigate("/login");
      
      sendEmails(values);
    } else {
      showRegistrationError(response.data.message);
    }
  } catch (error) {
    showRegistrationError(error.response?.data?.message || "An error occurred. Please try again.");
  }
};


  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <RegisterCard onFinish={handleSubmit} />
    </div>
  );
};

export default Register;
