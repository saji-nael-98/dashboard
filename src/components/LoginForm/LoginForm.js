import styles from "./LoginForm.module.css";
import { Alert, Form, Input } from "antd";
import useHttp from "../../hooks/use-http";
import CButton from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { login, userLogin } from "../../store/action/auth-action";
export const LoginForm = (props) => {
  const dispatch = useDispatch();
  const onSubmitHandler = (values) => {
    const user = { username: values.username, password: values.password };
    dispatch(login(user));
  };

  return (
    <>
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
          <CButton type="submit">تسجيل الدخول</CButton>
        </Form.Item>
      </Form>
    </>
  );
};
