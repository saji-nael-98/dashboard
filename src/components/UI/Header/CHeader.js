import { Header } from "antd/lib/layout/layout";
import Navbar from "./Navbar";

const CHeader = (props) => {
  if (!props.isAuthenticated) {
    return;
  }
  return (
    <Header style={{ backgroundColor: "white", padding: 0}}>
      <Navbar />
    </Header>
  );
};
export default CHeader;
