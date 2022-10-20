import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";

const Page = styled.div`
  height: 100%;
  overflow-y: auto;
`;
export default (props) => {
  return (
    <Page
      id={props.id || null}
      style={props.style || null}
      className={props.className || null}
    >
      {props.children}
    </Page>
  );
};
