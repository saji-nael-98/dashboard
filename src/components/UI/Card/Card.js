import styled from "styled-components";
const StyledCard = styled.div`
  background-color: white;
  border-radius: 0.1rem;
  padding: 0.5rem;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;
const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};
export default Card;
