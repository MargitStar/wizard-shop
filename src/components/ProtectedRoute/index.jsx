import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ isAuthorized }) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
