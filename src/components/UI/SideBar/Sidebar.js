import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import {
  PieChartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { gray, yellow } from "../../../assests/color/color";
const StyledMenuItem = styled(Menu.Item)`
  &.ant-menu-item-selected {
    background-color: ${yellow} !important;
  }
  & a {
    display: block;
    color: white;
    opacity: 0.75;
    width: 100%;
  }
  & a:hover {
    opacity: 1;
    color: white;
   
  }
  &:hover {
  }
`;
const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  if (!props.isAuthenticated) {
    return;
  }
  function getItem(label, link, key, icon, children) {
    return {
      key,
      icon,
      children,
      label: label,
      link: link,
    };
  }

  const items = [
    getItem("لوحة التحكم", "/", "1", <PieChartOutlined />),
    getItem("البضاعة", "/products", "2", <DatabaseOutlined />),
    getItem("العملاء", "/customers", "4", <UserOutlined />),
    getItem("الطلبات", "/orders", "5", <ShoppingCartOutlined />),
    getItem("التعليقات", "/reviews", "6", <MessageOutlined />),
  ];
  return (
    <Sider
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 60,
        }}
      ></div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {items.map((item, index) => (
          <StyledMenuItem key={index}>
            <Link to={item.link}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </StyledMenuItem>
        ))}
      </Menu>
    </Sider>
  );
};
export default Sidebar;
