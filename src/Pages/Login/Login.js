import React, { useState } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate, Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import Section from "../../components/UI/Section/Section";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { login } from "../../service/Auth";
import Layout from "antd/lib/layout/layout";
import { useCallback } from "react";
import { Alert } from "antd";
const Login = () => {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onLoginHandler = useCallback((email, password) => {
    login(email, password).then((res) => {
      if (res.status === 200) {
        if (
          signIn({
            token: res.token, //Just a random token
            tokenType: "Bearer", // Token type set as Bearer
            authState: { email: email, password: password, roles: res.roles }, // Dummy auth user state
            expiresIn: 120, // Token Expriration time, in minutes
          })
        ) {
          // If Login Successfull, then Redirect the user to secure route
          navigate("/secure");
        } else {
          // Else, there must be some error. So, throw an error
          alert("Error Occoured. Try Again");
        }
      } else {
        switch (res.status) {
          case 403: {
            setError(true);
            break;
          }
        }
      }
    });
  }, []);

  if (isAuthenticated()) {
    return <Navigate to={"/secure"} replace />;
  } else {
    return (
      <Layout id={styles["login-page"]}>
        <div></div>
        <Section>
          <h3>لوحة التحكم</h3>
          <h5>مرحبا بك! الرجاء ادخل المعلومات المطلوبة</h5>
          {error && <Alert message="الرجاء التأكد من البيانات المدخلة" type="error" />}
          <LoginForm onLogin={onLoginHandler} />
        </Section>
      </Layout>
    );
  }
};

export default Login;
