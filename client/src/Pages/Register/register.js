import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegisterCard from "../../Components/Register/registerCard";
import {
  showRegistrationSuccess,
  showRegistrationError,
  showAgreementError,
} from "../../Components/Register/registerNotification";
import { API_BASE_URL } from "../../config";

const Register = () => {
  const navigate = useNavigate();

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
