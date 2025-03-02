import { Navigate, Outlet } from "react-router-dom";
import React from "react";

type ProtectedRouteProps = {
  isAuthorized: boolean;
};

const ProtectedRoute = ({ isAuthorized }: ProtectedRouteProps) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
