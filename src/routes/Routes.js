import React from "react";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Menu } from "antd";
import Products from "../Pages/Products/Products";

const RoutesComponent = () => {
  const isAuthenticated = useIsAuthenticated();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
      <Layout
        style={{
          flexGrow: 1,
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
        }}
      >
        
        {isAuthenticated() && (
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Menu
              theme="dark"
              mode="vertical"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <AiOutlineUserAdd />,
                  label: "nav 1",
                },
                {
                  key: "2",
                  icon: <AiOutlineUserAdd />,
                  label: "nav 1",
                },
              ]}
            />
          </Sider>
        )}

        <Layout>
          {isAuthenticated() && <Header></Header>}

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

          {isAuthenticated() && <Footer></Footer>}
        </Layout>
      </Layout>

      <div>
        {isAuthenticated() && <header></header>}
        <main></main>
      </div>
    </BrowserRouter>
  );
};

export default RoutesComponent;
