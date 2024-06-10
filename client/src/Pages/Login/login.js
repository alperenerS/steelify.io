import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Slices/userSlice";
import { API_BASE_URL } from "../../config";
import LoginCard from "../../Components/Login/loginCard";
import {
  showLoginSuccess,
  showLoginError,
  showLoginFailed,
} from "../../Components/Login/loginNotification";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { from } = location.state || { from: { pathname: "/" } };

  const onFinish = async (values) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, values);
      if (response.data && response.data.data) {
        const { data, access_token } = response.data.data;
        const userId = data.id;
        dispatch(setUser({ user: data, email: data.email, token: access_token, id: userId }));

        showLoginSuccess(response.data.message);
        navigate(from.pathname);
      } else {
        showLoginError();
      }
    } catch (error) {
      showLoginFailed(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <LoginCard onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </div>
  );
};

export default Login;
