import React from "react";
import List from "../List/List";
import ListItem from "../List/ListItem";
import { AiFillHome } from "react-icons/ai";
import { BiBasket } from "react-icons/bi";
import { FaUsers,FaDatabase,FaHeart } from "react-icons/fa";

import styles from "./SidebarMenu.module.css";
const list = [
  {
    label: "لوحة التحكم",
    link: "/",
    icon: <AiFillHome />,
  },
  {
    label: "البضاعة",
    link: "/products",
    icon: < FaDatabase />,
  },
  {
    label: "العملاء",
    link: "/customers",
    icon: <FaUsers />,
  },
  {
    label: "الطلبات",
    link: "/orders",
    icon: <BiBasket />,
  },
  {
    label: "العروض",
    link: "/offers",
    icon: <FaHeart />,
  },
];
const SidebarMenu = () => {
  return (
    <List>
      {list.map((item, index) => (
        <ListItem key={index}>
          <a className={styles["link"]} href={item.link}>
            <span>{item.icon}</span>
            {item.label}
          </a>
        </ListItem>
      ))}
    </List>
  );
};
export default SidebarMenu;
