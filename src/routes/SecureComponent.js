import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SecureComponent = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return props.element;
};
export default memo(SecureComponent);
