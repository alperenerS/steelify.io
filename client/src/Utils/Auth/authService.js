// authService.js
import {jwtDecode} from 'jwt-decode';

export const getUserInfoFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken?.name || 'Undefined';
  } catch (error) {
    console.error("Error decoding token: ", error);
    return 'Undefined';
  }
};
