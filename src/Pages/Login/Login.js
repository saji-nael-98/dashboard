import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import Page from "../../components/UI/Page/Page";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
let isInitial = true;
const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to={"/products"} replace />;
  }
  return (
    <Page>
      <div className={styles["container"]}>
        <div className={styles["box"]}></div>
        <div className={styles["box"]}>
          <section id={styles["login-form"]}>
            <div className={styles["header"]}>
              <h3>تسجيل الدخول</h3>
              <h5>الرجاء أدخل المعلومات المطلوبة</h5>
            </div>
            <div className={styles["content"]}>
              <LoginForm />
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
};

export default Login;
