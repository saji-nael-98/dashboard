import { memo } from "react";
import styled from "styled-components";
const StyledSection = styled.section`
  width: calc(100% - 1rem);
  padding: 0.7rem 0.5rem;
  margin: 0.7rem auto;
  overflow-x: auto;
`;
const Section = (props) => {
  return <StyledSection id={props.id || null}>{props.children}</StyledSection>;
};
export default memo(Section);
