import SidebarMenu from "./SidebarMenu";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  console.log(100)
  return (
    <aside className={styles.sidebar}>
      <SidebarMenu />
    </aside>
  );
};
export default Sidebar;
