import React from "react";
import { Navigate, useLocation } from "react-router";
import FullPageLoader from "../../FullPageLoader/FullPageLoader";
import UseAuth from "../UseAuth/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loader } = UseAuth();
  console.log(user);
  let location = useLocation();
  if (loader) {
    return <FullPageLoader />;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
