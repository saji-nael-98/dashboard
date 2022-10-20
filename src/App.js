import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { useDispatch } from "react-redux";
import AppLoyout from "./layout/Layout";
import RoutesComponent from "./routes/Routes";
import { login } from "./store/action/auth-action";

const App = () => {
  return (
    <AppLoyout>
      <RoutesComponent />
    </AppLoyout>
  );
};

export default App;
