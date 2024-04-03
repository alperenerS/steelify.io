export const saveUserInfo = (response) => {
  const { access_token, data } = response;
  localStorage.setItem('accessToken', access_token);
  localStorage.setItem('userInfo', JSON.stringify(data));
};


export const getUserInfo = () => {
  const userInfoStr = localStorage.getItem('userInfo');
  return userInfoStr ? JSON.parse(userInfoStr) : null;
};

export const clearUserInfo = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userInfo');
};
