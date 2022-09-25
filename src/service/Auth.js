import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post("/api/auth/signIn", {
      username: email,
      password: password,
    });
    const data = await response.data;
    return data;
  } catch (err) {
    return err.request.status;
  }
};
