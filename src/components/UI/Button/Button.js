import { Button } from "antd";
import styled from "styled-components";
import { yellow } from "../../../assests/color/color";
const BTN = styled(Button)`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.backgroundColor};
    opacity: 0.8;
    color: white;
  }
  :focus {
    background-color: ${(props) => props.backgroundColor};
    color: white;
  }
`;
const CButton = (props) => {
  return (
    <BTN
      id={props.id}
      htmlType={props.type || "button"}
      onClick={props.onClick || ""}
      shape={"round"}
      size="large"
      disabled={props.loading || false}
      loading={props.loading || false}
      backgroundColor={yellow}
    >
      {props.children}
    </BTN>
  );
};
export default CButton;
