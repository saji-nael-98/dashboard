import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/auth-slice";
import Page from "../../components/UI/Page/Page";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { AUTH_SELECTOR } from "../../Constents/SelectorsConstent";
const Login = () => {
  const { isAuthenticated, userToken, user } = useSelector(AUTH_SELECTOR);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user,
          userToken,
        })
      );
      navigate("/products", { replace: true });
    }
  }, [isAuthenticated]);

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
