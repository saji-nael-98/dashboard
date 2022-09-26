import React from "react";
import styles from "./ListItem.module.css";
const ListItem = (props) => {
  return (
    <li className={`${styles["list-item"]} ${props.className || ""}`} {...props}>
        {props.children}
    </li>
  );
};
export default ListItem;