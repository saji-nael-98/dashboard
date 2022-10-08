import { Space } from "antd";
import { Footer } from "antd/lib/layout/layout";

const CFooter = (props) => {
  if (!props.isAuthenticated) {
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