import { Space } from "antd";
import { Footer } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";

const CFooter = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return;
  }
  return (
    <Footer style={{
      zIndex:1
    }}>
      <Space>
        <div>لوحة التحكم &copy; 2023</div>
      </Space>
    </Footer>
  );
};
export default CFooter;
