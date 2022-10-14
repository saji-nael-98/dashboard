import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHeader = (props) => {
  const StyledPageHeader = styled.section`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  `;
  const Paths = () => {
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
    return (
      <StyledUl>
        {props.paths.map((item, index) => (
          <li>
            <Link to={item.link}>{item.label}</Link>
            {index !== props.paths.length - 1 ? " / " : null}
          </li>
        ))}
      </StyledUl>
    );
  };

  return (
    <StyledPageHeader>
      <h3>{props.title}</h3>
      <Paths />
    </StyledPageHeader>
  );
};
export default PageHeader;
