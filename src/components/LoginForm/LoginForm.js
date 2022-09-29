import { Form, Formik, Field } from "formik";
import styles from "./LoginForm.module.css";
import * as Yup from "yup";
import { FormControl } from "../UI/FormControl/FormControl";
import { FormInput } from "../UI/FormInput/FormInput";
import { Button } from "../UI/Button/Button";
import { login } from "../../service/Auth";

const initialValue = {
  email: "",
  password: "",
};
export const LoginForm = (props) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("الايميل غير صالح").required("مطلوبة!"),
    password: Yup.string().min(6, "قصيرة جدا!!").required("مطلوبة!"),
  });
  const onSubmitHandler = (values) => {
    props.onLogin(values.email, values.password);
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={loginSchema}
      onSubmit={onSubmitHandler}
    >
      {({ errors, touched }) => (
        <Form style={styles.form}>
          <Field
            name="email"
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
                placeholder="ادخل كلمة المرور"
              />
            )}
          />
          <FormControl id={styles["login-form__form-action"]}>
            <Button type="submit">تسجيل الدخول</Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};
