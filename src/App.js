import { Button, Layout } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { AuthProvider } from "react-auth-kit";
import styles from "./App.module.css";
import RoutesComponent from "./Routes";

const App = () => {
  return (
    <AuthProvider authName={"_auth"} authType={"cookie"}>
      <Layout className={styles["app"]}>
        <RoutesComponent />
      </Layout>
    </AuthProvider>
  );
};

export default App;
