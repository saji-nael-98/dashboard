import { BiHome } from "react-icons/bi";
import { FiDatabase,FiPercent } from "react-icons/fi";

export const menuItems = [
  {
    label: "لوحة التحكم",
    key: "لوحة التحكم",
    icon: <BiHome />,
    link: "/",
  },
  {
    label: "البضاعة",
    key: "البضاعة",
    icon: <FiDatabase />,
    link: "/products",
  },
  {
    label: "العروض",
    key: "العروض",
    icon: <FiPercent />,
    link: "/offers",
  },
];
