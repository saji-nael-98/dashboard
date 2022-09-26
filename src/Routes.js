import React from "react";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SecureComponent from "./components/UI/SecureComponent/SecureComponent";
import Sidebar from "./components/UI/SideBar/Sidebar";
import Products from "./Pages/Products/Products";

const RoutesComponent = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <BrowserRouter>
      {isAuthenticated() && <Sidebar />}
      <div
        style={{
          flexGrow: 1,
          minHeight: "100vh",
          backgroundColor: "#F5F7FA",
        }}
      >
        {isAuthenticated() && <header></header>}
        <main>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
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
        </main>
      </div>
    </BrowserRouter>
  );
};

export default RoutesComponent;
