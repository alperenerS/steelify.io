import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    email: null,
    token: null,
    id: null,
    odooId: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.odooId = action.payload.odooId;
    },
    logout: (state) => {
      state.user = null;
      state.email = null;
      state.token = null;
      state.id = null;
      state.odooId = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
