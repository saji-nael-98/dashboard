import { Layout, Menu } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderContent from "./HeaderContent";
import styles from "./Layout.module.css";
import { menuItems } from "./MenuList";
const { Header, Sider, Content } = Layout;
const StyledMenu = styled(Menu)`
  background-color: #2a3042;
  color: white;
  padding: 0;
  .ant-menu-item {
    opacity: 0.5;
  }
  .ant-menu-item .ant-menu-item-icon {
    font-size: 1.2rem;
    position: relative;
    top: 2.5px;
  }
  .ant-menu-item:hover {
    color: white;
    background-color: #2a3042 !important;
    opacity: 1;
    transition: opacity 1s;
  }
  .ant-menu-item-selected {
    background-color: #2a3042 !important;
    color: white;
  }
`;
const SidebarContent = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles["logo"]}></div>
      <StyledMenu
        onClick={({ key }) => {
          const { link } = menuItems.find((item) => {
            return item.key === key;
          });
          navigate(link);
        }}
        className={"styled"}
        mode="vertical"
        items={menuItems}
      />
    </>
  );
};

const AppLoyout = (props) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Layout className={styles["app-layout"]}>
      {isAuthenticated && (
        <Sider className={styles["sidebar"]}>
          <SidebarContent />
        </Sider>
      )}
      <Layout>
        {isAuthenticated && (
          <Header className={styles["header"]}>
            <HeaderContent />
          </Header>
        )}
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
export default AppLoyout;
