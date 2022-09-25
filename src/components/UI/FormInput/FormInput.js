import styles from "./FormInput.module.css";
import { FormControl } from "../FormControl/FormControl";

export const FormInput = ({ label,type, placeholder, field, touched, errors }) => {
  return (
    <FormControl>
      <label className={styles.label}>{label}</label>
      <input className={`${styles.input}`} {...field} type={type || "text"} placeholder={placeholder || ""} />
      {touched[field.name] && errors[field.name] && (
        <div className={styles.error}>{errors[field.name]}</div>
      )}
    </FormControl>
  );
};
