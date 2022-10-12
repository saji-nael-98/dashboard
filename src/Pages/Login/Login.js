import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import Section from "../../components/UI/Section/Section";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import Layout from "antd/lib/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
const Login = () => {
  const { isAuthenticated } = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLoginHandler = (user) => {
    dispatch(authActions.login(user.token));
    navigate('/products')
  };

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
};

export default Login;
