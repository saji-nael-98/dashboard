import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post("/api/auth/signIn", {
      username: email,
      password: password,
    });
    const data = await response.data;

    return {
      status: 200,
      ...data,
    };
  } catch (err) {
    return {
      status: err.request.status,
    };
  }
};
