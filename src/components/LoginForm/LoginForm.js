import styles from "./LoginForm.module.css";
import { Alert, Form, Input } from "antd";
import useHttp from "../../hooks/use-http";
import CButton from "../UI/Button/Button";
export const LoginForm = (props) => {
  const { isLoading, error, sendRequest: sendUserData } = useHttp();
  const loginUser = function (userData) {
    let user = {
      username: this.username,
      password: this.password,
      ...userData,
    };
    props.onLogin(user);
  };
  const onSubmitHandler = (values) => {
    const user = { username: values.username, password: values.password };
    sendUserData(
      {
        url: "http://localhost:9090/api/auth/signIn",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: user,
      },
      loginUser.bind(user)
    );
  };

  return (
    <>
      {error && <Alert message={error} type="error" />}
      <Form
        layout="vertical"
        onFinish={onSubmitHandler}
        style={styles.form}
        requiredMark={false}
      >
        <Form.Item
          rules={[
            {
              required: true,
              message: "الرجاء ادخل اسم المستخدم او الايميل",
            },
          ]}
          name={"username"}
          label="أسم المستخدم/الايميل"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "الرجاء ادخل كلمة المرور",
              min: 6,
            },
          ]}
          name="password"
          label="كلمة السرية"
        >
          <Input.Password min={6} />
        </Form.Item>
        <Form.Item className={styles["form-action"]}>
          <CButton loading={isLoading} type="submit">تسجيل الدخول</CButton>
        </Form.Item>
      </Form>
    </>
  );
};
