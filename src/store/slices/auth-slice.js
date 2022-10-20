import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user.user,
  userToken: user.userToken,
  isAuthenticated: user ? true : false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserData(state, action) {
      state.isAuthenticated = true;
      state.userToken = action.payload.token;
      state.user = action.payload.user;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
