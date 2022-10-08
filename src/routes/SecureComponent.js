import { RequireAuth } from "react-auth-kit";

const SecureComponent = (props) => {
  return <RequireAuth loginPath={"/login"}>{props.element}</RequireAuth>;
};
export default SecureComponent;
