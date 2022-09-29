import { Layout } from "antd";
import styles from "./Page.module.css";
export const Page = (props) => {
  return <div id={props.id} className={styles['page']}>{props.children}</div>;
};
