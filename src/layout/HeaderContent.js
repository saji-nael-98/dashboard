import { Avatar, Badge } from "antd";
import styled from "styled-components";
import { AiOutlineUser, AiOutlineNotification } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
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
const HeaderContent = () => {
  const dispatch = useDispatch();

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
  ];
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
