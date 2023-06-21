import { createSlice } from "@reduxjs/toolkit";

const initAuthState = {
  isLogged: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Exporting Auth Actions
export const authActions = authSlice.actions;

export default authSlice.reducer;
