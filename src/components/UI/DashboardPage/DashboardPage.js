import React from "react";
import styled from "styled-components";
import { gray } from "../../../assests/color/color";
import Section from "../Section/Section";
const Page = styled.div`
  background-color: ${(props) => props.backgroundColor};
  min-height: ${(props) => (props.fullWidth ? "100vh" : "auto")};
`;

const DashboardPage = (props) => {
  return (
    <Page backgroundColor={gray} fullWidth={props.fullWidth || false}>
      {props.children}
    </Page>
  );
};
export default DashboardPage;
