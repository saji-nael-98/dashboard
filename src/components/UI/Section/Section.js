import { memo } from "react";
import styled from "styled-components";
import { gray } from "../../../assests/color/color";
const StyledSection = styled.section`
  padding: 0.7rem 1.1rem;
  margin: 0.7rem ;
  background-color: ${(props) => props.backgroundColor};
 
`;
const Section = (props) => {
  return (
    <StyledSection backgroundColor={"white"} id={props.id || null}>
      {props.children}
    </StyledSection>
  );
};
export default memo(Section);
