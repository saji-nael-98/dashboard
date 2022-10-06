import React from "react";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Menu, Space } from "antd";
import Products from "../Pages/Products/Products";

import Sidebar from "../components/UI/SideBar/Sidebar";

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
        {isAuthenticated() && <Sidebar />}

        <Layout>
          {isAuthenticated() && (
            <Header style={{ backgroundColor: "white" }}></Header>
          )}

          <Content>
            <Routes>
              <Route path={"/login"} element={<Login />} />
              <Route
                path={"/"}
                element={
                  <RequireAuth loginPath={"/login"}>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path={"/products"}
                element={
                  <RequireAuth loginPath={"/login"}>
                    <Products />
                  </RequireAuth>
                }
              />
              <Route path="/*" element={<div>404</div>} />
            </Routes>
          </Content>

          {isAuthenticated() && (
            <Footer>
              <Space>
                <div>لوحة التحكم &copy; 2023</div>
              </Space>
            </Footer>
          )}
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default RoutesComponent;
