import { notification } from "antd";

export const showLoginSuccess = (message) => {
  notification.success({
    message: "Login Successful",
    description: message || "You have successfully logged in!",
  });
};

export const showLoginError = (message) => {
  notification.error({
    message: "Login Failed",
    description: message || "Invalid email or password.",
  });
};

export const showLoginFailed = (error) => {
  notification.error({
    message: "Login Failed",
    description: `An error occurred. Please try again later. ${
      error.response?.data?.message || ""
    }`,
  });
};
