import { Navigate, useLocation } from "react-router";
// import useAuth from "../pages/hooks/useAuth";
// import useAdmin from "../pages/hooks/useAdmin";
import useAuth from "../pages/hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth()
//   const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

//   if (loading || isAdminLoading)
    // if (!!loading) {
    //   return <progress className="progress w-72"></progress>;
    // }
//  if (user && isAdmin)
   if (user) {
     return children;
   }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
