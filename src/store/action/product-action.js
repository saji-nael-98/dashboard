import axios from "axios";
import { READ_ALL_PRODUCTS } from "../../API/ProductAPI";
import { productAction } from "../product-slice";

export const fetchProducts = () => {
  return async (dispatch, useSelector) => {
    const state = useSelector((state) => state);
    const headers = {
      Authorization: "Bearer " + state.auth.token,
    };
    const sendRequest = async () => {
      const response = await axios.get(READ_ALL_PRODUCTS, {
        headers: headers,
      });

      const data = await response.data;
      return data;
    };
    try {
      const data = await sendRequest();
      dispatch(productAction.setProducts(data))
    } catch (error) {
      console.log(error);
    }
  };
};
