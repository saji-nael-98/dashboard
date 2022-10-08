import { Button } from "antd";
import styled from "styled-components";
import { yellow } from "../../../assests/color/color";
const BTN = styled(Button)`
  background-color: ${yellow};
  color: black;
  cursor: pointer;
  border:none;
  :hover {
    background-color: ${yellow};
    opacity: 0.8;
    color: black;
    
  }
  :focus {
    background-color: ${yellow};
    color: black;
  }
`;
const CButton = (props) => {
  return (
    <BTN
      id={props.id}
      htmlType={props.type || "button"}
      onClick={props.onClick || null}
      size="large"
      disabled={props.loading || false}
      loading={props.loading || false}
    >
      {props.children}
    </BTN>
  );
};
export default CButton;
