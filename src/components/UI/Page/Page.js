import { Layout } from "antd";
import styles from "./Page.module.css";
export const Page = (props) => {
  return <Layout id={props.id} className={styles['page']}>{props.children}</Layout>;
};
