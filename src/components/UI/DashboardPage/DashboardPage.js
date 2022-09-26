import React from "react";
import Section from "../Section/Section";
import styles from "./DashboardPage.module.css";
const DashboardPage = (props) => {
  return (
    <div className={styles["dashboard-page"]}>
      <Section>
        <h1>{props.title}</h1>
      </Section>
      {
        props.children
      }
    </div>
  );
};
export default DashboardPage;
