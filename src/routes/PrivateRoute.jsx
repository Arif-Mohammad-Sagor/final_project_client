import React from 'react'
import useAuth from '../pages/hooks/useAuth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(loading, user);

    if (loading) {
           return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
<Navigate to="/login" state={{ from: location }} replace></Navigate>;

}

export default PrivateRoute