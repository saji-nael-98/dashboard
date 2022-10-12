import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { black, grey } from "../../../assests/color/color";
const Page = styled.div`
  background-color: ${(props) => props.backgroundColor};
  min-height: ${(props) => (props.fullWidth ? "100vh" : "85vh")};
  max-height: ${(props) => (props.fullWidth ? "100vh" : "85vh")};
  overflow: auto;
  .dashboard-page__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding:0 1rem;
  }
  .dashboard-page__header a {
    color: ${black};
    opacity: 0.75;
  }
  .dashboard-page__header a:hover {
    opacity: 1;
  }
`;
const DashboardPageHeader = (title, links) => {
  return (
    <div className="dashboard-page__header">
      <div>
        <h3>
          <strong>{title}</strong>
        </h3>
      </div>
      <div>
        {links.map((item, index) => (
          <Fragment key={index}>
            <Link key={index} to={item.link}>
              {item.label}
            </Link>
            {index < links.length - 1 ? " / " : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
const DashboardPage = (props) => {
  return (
    <Page backgroundColor={grey} fullWidth={props.fullWidth || false}>
      {DashboardPageHeader(props.title, props.links)}
      {props.children}
    </Page>
  );
};
export default React.memo(DashboardPage);
