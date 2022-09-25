import styles from './FormControl.module.css'
export const FormControl = (props) => {
  return <div id={props.id} className={`${styles['form-control']} ${props.className||''}`}>{props.children}</div>;
};
