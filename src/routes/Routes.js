import React from "react";
import { Route, Routes } from "react-router-dom";
import { NEW_PRODUCT_PATH, PRODUCT_PATH } from "../Constents/RouteConstents";
import PageNotFound from "../Pages/404/PageNotFound";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Product/Product";
import NewProduct from "../Pages/Products/NewProduct";
import ProductsPage from "../Pages/Products/Products";
import SecureComponent from "./SecureComponent";


const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/products"}>
        <Route
          path=""
          element={<SecureComponent element={<ProductsPage />} />}
        />
        <Route
          path={NEW_PRODUCT_PATH}
          element={<SecureComponent element={<NewProduct />} />}
        />
        <Route
          path={PRODUCT_PATH}
          element={<SecureComponent element={<Product />} />}
        />
      </Route>
      <Route path={"/*"} element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
