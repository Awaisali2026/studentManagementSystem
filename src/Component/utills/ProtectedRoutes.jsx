import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

// allowedRoles: optional array of roles permitted on this branch of routes.
// If omitted, any logged-in user may pass (used to just gate "must be logged in").
const ProtectedRoutes = ({ allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.auth.role);

  if (!user) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(role)) {
    // Logged in, but wrong role for this section — send them to their own home.
    return (
      <Navigate to={role === "admin" ? "/admin" : "/student-dashboard"} replace />
    );
  }

  return <Outlet />;
};

export default ProtectedRoutes;
