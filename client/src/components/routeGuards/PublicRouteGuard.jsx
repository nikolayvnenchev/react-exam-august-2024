import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRouteGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated
    ? <Navigate to="/" />
    : <Outlet />
}