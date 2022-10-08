import { Dropdown, Menu } from "antd";
import React from "react";
import styled from "styled-components";
import {  UserOutlined } from "@ant-design/icons";
import { useSignOut } from "react-auth-kit";

const StyledNavbar = styled.nav`
  height: 100%;
  padding: 0 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navbar = () => {
  const signOut = useSignOut();
  const menu = (
    <Menu
      items={[
        {
          label: "1st menu item",
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "2nd menu item",
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: "3rd menu item",
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />
  );
  return (
    <StyledNavbar>
      <div></div>
      <div>
        <Dropdown.Button
          overlay={menu}
          placement="bottom"
          icon={<UserOutlined />}
          onClick={() => {
            signOut();
          }}
        >
          تسجيل الخروج
        </Dropdown.Button>
      </div>
    </StyledNavbar>
  );
};
export default Navbar;
