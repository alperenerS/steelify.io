import { store } from '../../Redux/Store/store';
import { setUser, logout } from '../../Redux/Slices/userSlice';

export const saveUserInfo = ({ data }) => {
  const { access_token, data: userData } = data;
  // Redux store'unda kullanıcı bilgilerini ve token'ı güncelle
  store.dispatch(setUser({ user: userData, token: access_token }));
};

export const getUserInfo = () => {
  // Redux store'undan kullanıcı bilgilerini al
  const state = store.getState();
  return state.user.user; // userSlice'taki initialState'e bağlı olarak bu yol değişebilir
};

export const clearUserInfo = () => {
  // Redux store'dan kullanıcı bilgilerini ve token'ı temizle
  store.dispatch(logout());
};

export const checkTokenExpiry = () => {
  // Redux store'dan token'ı kontrol et
  const state = store.getState();
  const { token } = state.user;

  if (!token) {
    clearUserInfo();
    return false;
  }

  try {
    const splitToken = token.split(".");
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
