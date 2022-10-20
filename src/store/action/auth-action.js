import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APiHeaderWithtoken, LOGIN_URL } from "../../Constents/APIConstents";
import { authActions } from "../slices/auth-slice";

export const userLogin = (user) => {
  return async (dispatch) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const sendLoginRequest = async () => {
      const response = await axios.post(
        "http://localhost:9090/api/auth/signIn",
        user,
        headers
      );
      if (!response.status === 200) {
        throw new Error("login faild");
      }
      return await response.data;
    };
    try {
      const data = await sendLoginRequest();
      dispatch(authActions.login(data.token));
    } catch (error) {}
  };
};
export const login = createAsyncThunk(
  "user/login",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_URL, data);
      dispatch(
        authActions.saveUserData({
          userInfo: data,
          token: response.data.token,
        })
      );
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
