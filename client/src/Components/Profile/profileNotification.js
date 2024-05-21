import { notification } from "antd";

export const showProfileLoadError = (message) => {
  notification.error({
    message: "Failed to load profile data",
    description: message || "An error occurred while fetching profile data.",
  });
};

export const showProfileUpdateSuccess = () => {
  notification.success({
    message: "Profile Updated",
    description: "Your profile has been updated successfully.",
  });
};

export const showProfileUpdateError = (message) => {
  notification.error({
    message: "Profile Update Failed",
    description: message || "An error occurred while updating your profile.",
  });
};
