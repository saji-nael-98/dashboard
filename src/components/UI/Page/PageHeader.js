import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledPageHeader = styled.section`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
const StyledUl = styled.ul`
  list-style-type: none;
  & li {
    display: inline-block;
    margin: 0 3px;
  }
  & a {
    color: #242424;
    opacity: 0.5;
    transition: opacity 0.5s;
  }
  & a:hover {
    opacity: 1;
  }
`;
const Paths = (props) => {
  return (
    <StyledUl>
      {props.paths.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>{item.label}</Link>
          {index !== props.paths.length - 1 ? " / " : null}
        </li>
      ))}
    </StyledUl>
  );
};

const PageHeader = (props) => {
  return (
    <StyledPageHeader>
      <h3>{props.title}</h3>
      <Paths paths={props.paths}/>
    </StyledPageHeader>
  );
};
export default PageHeader;
