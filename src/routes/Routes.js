import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
    </Routes>
  );
};

export default RoutesComponent;
