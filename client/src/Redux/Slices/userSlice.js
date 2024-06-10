import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    email: null,
    token: null,
    id: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logout: (state) => {
      state.user = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
