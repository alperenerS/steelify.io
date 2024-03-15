// authService.js
import {jwtDecode} from 'jwt-decode';

export const getUserInfoFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken?.email || 'Undefined';
  } catch (error) {
    console.error("Error decoding token: ", error);
    return 'Undefined';
  }
};
