import { Navigate } from "react-router-dom";
import { CONSTANTS } from "../utils/CONSTANTS";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type ProtectedRouteProps = {
  componentToPassDown: JSX.Element;
};

const ProtectedRoute = ({ componentToPassDown }: ProtectedRouteProps) => {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);
  if (accessToken === "" || accessToken === null) {
    return <Navigate to='/login' state={{ from: CONSTANTS.history.location }} />;
  }
  return componentToPassDown;
};

export default ProtectedRoute;
