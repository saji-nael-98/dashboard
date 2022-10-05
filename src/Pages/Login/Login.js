import React, { useState } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate, Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import Section from "../../components/UI/Section/Section";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import Layout from "antd/lib/layout/layout";
import { useCallback } from "react";
import { Alert } from "antd";
const Login = () => {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const onLoginHandler = (user) => {
    if (
      signIn({
        token: user.token, //Just a random token
        tokenType: "Bearer", // Token type set as Bearer
        authState: {
          username: user.username,
          password: user.password,
          roles: user.roles,
        }, // Dummy auth user state
        expiresIn: 120, // Token Expriration time, in minutes
      })
    ) {
      // If Login Successfull, then Redirect the user to secure route
      navigate("/secure");
    } else {
      // Else, there must be some error. So, throw an error
      alert("حذث خطأ");
    }
  };

  if (isAuthenticated()) {
    return <Navigate to={"/"} replace />;
  } else {
    return (
      <Layout id={styles["login-page"]}>
        <div></div>
        <Section>
          <h3>لوحة التحكم</h3>
          <h5>مرحبا بك! الرجاء ادخل المعلومات المطلوبة</h5>
          <LoginForm onLogin={onLoginHandler} />
        </Section>
      </Layout>
    );
  }
};

export default Login;
