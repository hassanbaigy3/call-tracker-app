import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CONSTANTS } from "../utils/CONSTANTS";
import { RootState } from "../redux/store";
import { FC } from "react";

type ProtectedRouteProps = {
  componentToPassDown: JSX.Element;
};

const ProtectedRoute = ({ componentToPassDown }: ProtectedRouteProps) => {
  //   const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const currentUser = {
    access_token: null,
    refresh_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NzI0NjU3NDEsImV4cCI6MTY3MjQ2OTM0MX0.MqnCNMEL_wnwJ191jccNr1gOrgmgmJqI_eodHNDmwYg",
    user: {
      id: "admin",
      username: "admin",
    },
  };
  if (currentUser.access_token == null) {
    return <Navigate to='/login' state={{ from: CONSTANTS.history.location }} />;
  }
  return componentToPassDown;
};

export default ProtectedRoute;
