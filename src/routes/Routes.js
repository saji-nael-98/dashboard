import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../Pages/404/PageNotFound";
import Login from "../Pages/Login/Login";
import ProductsPage from "../Pages/Products/Products";
import SecureComponent from "./SecureComponent";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route
        path={"/products"}
        element={<SecureComponent element={<ProductsPage />} />}
      ></Route>
      <Route path={"/*"} element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
