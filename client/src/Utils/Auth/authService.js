export const saveUserInfo = (response) => {
  const { access_token, data } = response;
  localStorage.setItem('accessToken', access_token);
  localStorage.setItem('userInfo', JSON.stringify(data));
};


export const getUserInfo = () => {
  const userInfoStr = localStorage.getItem('userInfo');
  try {
    return userInfoStr ? JSON.parse(userInfoStr) : null;
  } catch (error) {
    console.error('getUserInfo parsing error:', error);
    // Hatalı veri durumunda, veriyi temizle ve null dön
    clearUserInfo();
    return null;
  }
};


export const clearUserInfo = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userInfo');
};
