export const saveUserInfo = ({ data }) => {
  const { access_token, data: userData } = data;
  localStorage.setItem("accessToken", access_token);
  localStorage.setItem("userInfo", JSON.stringify(userData));
};

export const getUserInfo = () => {
  const userInfoStr = localStorage.getItem("userInfo");
  try {
    return userInfoStr ? JSON.parse(userInfoStr) : null;
  } catch (error) {
    console.error("getUserInfo parsing error:", error);
    clearUserInfo();
    return null;
  }
};

export const clearUserInfo = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userInfo");
};

export const checkTokenExpiry = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    clearUserInfo();
    return false;
  }

  try {
    const splitToken = accessToken.split(".");
    if (splitToken.length !== 3) {
      throw new Error("Token format invalid");
    }

    const { exp } = JSON.parse(atob(splitToken[1]));

    const now = Date.now() / 1000;

    if (exp < now) {
      clearUserInfo();
      return false;
    }

    return true;
  } catch (error) {
    console.error("Token error:", error);
    clearUserInfo();
    return false;
  }
};
