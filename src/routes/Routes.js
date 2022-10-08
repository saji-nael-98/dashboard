import React from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Layout, { Content } from "antd/lib/layout/layout";
import Products from "../Pages/Products/Products";
import Sidebar from "../components/UI/SideBar/Sidebar";
import CHeader from "../components/UI/Header/CHeader";
import CFooter from "../components/UI/Footer/CFooter";
import SecureComponent from "./SecureComponent";
import AddProduct from "../Pages/Product/AddProduct";

const RoutesComponent = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <BrowserRouter>
      <Layout
        style={{
          flexGrow: 1,
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
        }}
      >
       <Sidebar isAuthenticated={isAuthenticated()} />
        <Layout>
          <CHeader isAuthenticated={isAuthenticated()} />
          <Content>
            <Routes>
              <Route path={"/login"} element={<Login />} />
              <Route
                path={"/"}
                element={<SecureComponent element={<Home />} />}
              />
              <Route path={"/products"}>
                <Route
                  path=""
                  element={<SecureComponent element={<Products />} />}
                />
                <Route
                  path="new"
                  element={<SecureComponent element={<AddProduct />} />}
                />
              </Route>
              <Route path="/*" element={<div>404</div>} />
            </Routes>
          </Content>
          <CFooter isAuthenticated={isAuthenticated()} />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesComponent;
