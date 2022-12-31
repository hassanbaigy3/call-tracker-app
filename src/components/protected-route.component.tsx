import { Navigate } from "react-router-dom";
import { CONSTANTS } from "../utils/CONSTANTS";

type ProtectedRouteProps = {
  componentToPassDown: JSX.Element;
};

const ProtectedRoute = ({ componentToPassDown }: ProtectedRouteProps) => {
  const accessToken = localStorage.getItem(CONSTANTS.AUTH_TOKEN);
  if (accessToken === "" || accessToken === null) {
    return <Navigate to='/login' state={{ from: CONSTANTS.history.location }} />;
  }
  return componentToPassDown;
};

export default ProtectedRoute;
