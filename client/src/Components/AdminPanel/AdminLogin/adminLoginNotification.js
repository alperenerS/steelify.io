import { notification } from "antd";

export const showAdminLoginSuccess = (message) => {
  notification.success({
    message: "Login Successful",
    description: message || "You have successfully logged in as admin!",
  });
};

export const showAdminLoginError = (message) => {
  notification.error({
    message: "Login Failed",
    description: message || "Invalid email or password.",
  });
};

export const showAdminLoginFailed = (error) => {
  notification.error({
    message: "Login Failed",
    description: `An error occurred. Please try again later. ${
      error.response?.data?.message || ""
    }`,
  });
};
