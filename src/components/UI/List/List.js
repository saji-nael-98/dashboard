import React from "react";
import styles from "./List.module.css";
const List = (props) => {
  return (
    <ul className={`${styles["list"]} ${props.className || ""}`}>
      {props.children}
    </ul>
  );
};
export default List;
