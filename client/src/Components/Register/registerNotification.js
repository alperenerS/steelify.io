import { notification } from "antd";

export const showRegistrationSuccess = (message) => {
  notification.success({
    message: "Registration Successful",
    description: message || "You have successfully registered. Please login.",
  });
};

export const showRegistrationError = (message) => {
  notification.error({
    message: "Registration Failed",
    description: message || "An unexpected error occurred. Please try again.",
  });
};

export const showAgreementError = () => {
  notification.error({
    message: "Registration Failed",
    description: "You must agree to the terms and conditions.",
  });
};
