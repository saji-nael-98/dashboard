import axios from "axios";
import { authActions } from "../auth-slice";

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
    } catch (error) {
      
    }
  };
};
