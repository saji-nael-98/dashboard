import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout(state) {
      state.token = '';
      state.isAuthenticated=false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
