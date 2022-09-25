import React from "react";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SecureComponent from "./components/UI/SecureComponent/SecureComponent";
import Sidebar from "./components/UI/SideBar/Sidebar";

const RoutesComponent = () => {
  const isAuthenticated = useIsAuthenticated()
  return (
    <BrowserRouter>
    {isAuthenticated() && <Sidebar/>}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/secure"}
          element={
            <RequireAuth loginPath={"/login"}>
              <SecureComponent />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
