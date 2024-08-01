import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouteGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated
    ? <Outlet />
    : <Navigate to="/login" />
}