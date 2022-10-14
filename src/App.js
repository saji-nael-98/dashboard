import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { AuthProvider } from "react-auth-kit";
import styles from "./App.module.css";
import AppLoyout from "./layout/Layout";
import RoutesComponent from "./routes/Routes";

const App = () => {
  return (
     <AppLoyout>
      <RoutesComponent/>
     </AppLoyout>
  );
};

export default App;
