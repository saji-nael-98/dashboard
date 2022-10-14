import styled from "styled-components";
const StyledSection = styled.section`
padding: 0.5rem 1rem;
`;
const Section = (props) => {
 
  return <StyledSection id={props.id || null}>{props.children}</StyledSection>;
};
export default Section;
