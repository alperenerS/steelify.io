export const saveUserInfo = ({ data }) => {
  const { access_token, data: userData } = data;
  localStorage.setItem('accessToken', access_token);
  localStorage.setItem('userInfo', JSON.stringify(userData));
};


export const getUserInfo = () => {
  const userInfoStr = localStorage.getItem('userInfo');
  try {
    return userInfoStr ? JSON.parse(userInfoStr) : null;
  } catch (error) {
    console.error('getUserInfo parsing error:', error);
    clearUserInfo();
    return null;
  }
};

export const clearUserInfo = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userInfo');
};

