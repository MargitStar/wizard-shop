import { createSlice } from "@reduxjs/toolkit";

const usersDB = {
  "test@test.com": "password123",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthorized: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      if (usersDB[email] && usersDB[email] === password) {
        state.isAuthorized = true;
        state.error = null;
      } else {
        state.isAuthorized = false;
        state.error = "Invalid username or password";
      }
    },
    logout: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
