import { Header } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "./Navbar";
const StyledHeader = styled(Header)`
  background-color: #f0f2f5;
  box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.1);
  padding: 0;
  z-index: 1;
`;
const CHeader = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return;
  }
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
};
export default CHeader;
