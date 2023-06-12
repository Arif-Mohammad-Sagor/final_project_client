import { Navigate, useLocation } from "react-router";
// import useAuth from "../pages/hooks/useAuth";
import useAdmin from "../pages/hooks/useAdmin";
import useAuth from "../pages/hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);
  const location = useLocation();


//  if (user && isAdmin)
   if (user && isAdmin) {
     return children;
   }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
