// authService.js
// jwt-decode paketine artık ihtiyaç duyulmuyor çünkü kullanıcı bilgileri doğrudan response'tan alınıyor.

// Kullanıcı bilgilerini ve token'ı localStorage'a kaydeder
// authService.js
export const saveUserInfo = (response) => {
  const { access_token, data } = response;
  localStorage.setItem('accessToken', access_token);
  // Kullanıcı bilgilerini JSON olarak localStorage'a kaydediyoruz
  localStorage.setItem('userInfo', JSON.stringify(data)); // data.data değil, doğrudan data kullanıldı.
};


export const getUserInfo = () => {
  const userInfoStr = localStorage.getItem('userInfo');
  return userInfoStr ? JSON.parse(userInfoStr) : null;
};

// Kullanıcı bilgilerini ve token'ı localStorage'dan siler
export const clearUserInfo = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userInfo');
};
