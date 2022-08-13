import { useContext } from 'react'
import { Navigate } from "react-router-dom";
import AppContext from "./AppContext";

export const ProtectedShipperRoute = ({ children }) => {
  const { role } = useContext(AppContext)
  if (role !== "shipper") {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export const ProtectedTransPortRoute = ({ children }) => {
  const { role } = useContext(AppContext)
  if (role !== "transport") {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export const PublicRoute = ({ children }) => {
  const { role } = useContext(AppContext)
  if (role === "shipper") {
    return <Navigate to="/shipper" replace />;
  }
  if (role === "transport") {
    return <Navigate to="/login" replace />;
  }

  return children;
} 