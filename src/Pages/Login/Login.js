import React from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate, Navigate } from "react-router-dom";
import { Page } from "../../components/UI/Page/Page";
import styles from "./Login.module.css";
import  Section  from "../../components/UI/Section/Section";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { login } from "../../service/Auth";
const Login = () => {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onLoginHandler = (email, password) => {
    login(email, password).then((res) => {
      if (res.status === 200) {
        if (
          signIn({
            token: res.token, //Just a random token
            tokenType: "Bearer", // Token type set as Bearer
            authState: { email: email, password: password,roles:res.roles }, // Dummy auth user state
            expiresIn: 120, // Token Expriration time, in minutes
          })
        ) {
          // If Login Successfull, then Redirect the user to secure route
          navigate("/secure");
        } else {
          // Else, there must be some error. So, throw an error
          alert("Error Occoured. Try Again");
        }
      }else{
        alert(JSON.stringify(res))
      } 
    });
  };
  const loginHandler = () => {
    if (
      signIn({
        token: "35v3443bn368367n306306wbn407qn420b436b4", //Just a random token
        tokenType: "Bearer", // Token type set as Bearer
        authState: { name: "React User", uid: 123456 }, // Dummy auth user state
        expiresIn: 120, // Token Expriration time, in minutes
      })
    ) {
      // If Login Successfull, then Redirect the user to secure route
      navigate("/secure");
    } else {
      // Else, there must be some error. So, throw an error
      alert("Error Occoured. Try Again");
    }
  };
  if (isAuthenticated()) {
    // If authenticated user, then redirect to secure dashboard
    return <Navigate to={"/secure"} replace />;
  } else {
    // If not authenticated, use the login flow
    // For Demostration, I'm using just a button to login.
    // In reality, there should be a form, validation, nwetowrk request and other things
    return (
      //   <button onClick={loginHandler}>Log In!!</button>
      <Page id={styles["login-page"]}>
        <div className={styles["welcome"]}></div>
        <Section className={styles["login"]}>
          <h3>لوحة التحكم</h3>
          <h5>مرحبا بك! الرجاء ادخل المعلومات المطلوبة</h5>
          <LoginForm onLogin={onLoginHandler} />
        </Section>
      </Page>
    );
  }
};

export default Login;
