import { Avatar, Badge, Dropdown, Menu } from "antd";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineNotification } from "react-icons/ai";

import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const HeaderContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const StyledHeaderContent = styled.div`
    display: flex;
    & > * {
      width: 50%;
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  `;

  const menu = [
    {
      label: " تسجيل الخروج ",
      key: "1",
      icon: (
        <BiLogOutCircle
          style={{
            fontSize: "1rem",
            marginLeft: 5,
          }}
        />
      ),
    },
    {
      label: " تسجيل الخروج ",
      key: "2",
      icon: (
        <BiLogOutCircle
          style={{
            fontSize: "1rem",
            marginLeft: 5,
          }}
        />
      ),
    },
  ];
  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "1": {
        dispatch(authActions.logout());
        break;
      }
    }
  };
  return (
    <StyledHeaderContent>
      <div>
        <strong>لوحة التحكم</strong>
      </div>
      <div>
        <Badge size={"default"} count={0} offset={[35, 5]}>
          <Avatar shape="circle" size={32} icon={<AiOutlineNotification />} />
        </Badge>
        &nbsp;
        <Avatar size={32} icon={<AiOutlineUser />} />
      </div>
    </StyledHeaderContent>
  );
};
export default HeaderContent;
