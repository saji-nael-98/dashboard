import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  APiHeaderWithtoken,
  READ_PRODUCTS_URL,
} from "../../Constents/APIConstents";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { getState }) => {
    try {
      const token = getState().auth.userToken;
      const response = await axios.get(READ_PRODUCTS_URL, {
        headers: APiHeaderWithtoken(token),
      });
      return response?.data;
    } catch (error) {
      alert(error);
      return error.message;
    }
  }
);
