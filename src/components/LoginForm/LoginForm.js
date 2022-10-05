import { Form, Formik, Field } from "formik";
import styles from "./LoginForm.module.css";
import * as Yup from "yup";
import { FormControl } from "../UI/FormControl/FormControl";
import { FormInput } from "../UI/FormInput/FormInput";
import CButton from "../UI/Button/Button";
import { Alert } from "antd";
import useHttp from "../../hooks/use-http";
const initialValue = {
  username: "",
  password: "",
};
export const LoginForm = (props) => {
  const { isLoading, error, sendRequest: sendUserData } = useHttp();
  const loginSchema = Yup.object().shape({
    username: Yup.string().email("الايميل غير صالح").required("مطلوبة!"),
    password: Yup.string().min(6, "قصيرة جدا!!").required("مطلوبة!"),
  });
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
        url: "http://localhost:9002/api/auth/signIn",
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
      <Formik
        initialValues={initialValue}
        validationSchema={loginSchema}
        onSubmit={onSubmitHandler}
      >
        {({ errors, touched }) => (
          <Form style={styles.form}>
            <Field
              name="username"
              render={({ field, form: { touched, errors } }) => (
                <FormInput
                  label={"البريد الالكتروني"}
                  field={field}
                  touched={touched}
                  errors={errors}
                  placeholder="ادخل البريد الالكتروني"
                />
              )}
            />
            <Field
              name="password"
              render={({ field, form: { touched, errors } }) => (
                <FormInput
                  label={"كلمة السر"}
                  field={field}
                  touched={touched}
                  errors={errors}
                  type="password"
                  placeholder="ادخل كلمة المرور"
                />
              )}
            />
            <FormControl id={styles["login-form__form-action"]}>
              <CButton loading={isLoading} type="submit">
                تسجيل الدخول
              </CButton>
            </FormControl>
          </Form>
        )}
      </Formik>
    </>
  );
};
