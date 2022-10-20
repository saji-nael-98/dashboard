export const APiHeaderWithtoken = (token) => {
  return {
    "Content-type": "application/json;charset=UTF-8",
    Authorization: "Bearer " + token,
  };
};
//product
export const PRODUCT_URL = "/api/product";
export const SAVE_PRODUCT_URL = `${PRODUCT_URL}`;
export const READ_PRODUCTS_URL = `${PRODUCT_URL}/readAll`;
export const READ_PRODUCT_URL = (id) => `${PRODUCT_URL}/${id}`;
export const DELETE_PRODUCT_URL = (id) => `${PRODUCT_URL}/${id}`;
