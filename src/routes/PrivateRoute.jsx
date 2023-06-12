import React from 'react'
import useAuth from '../pages/hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    console.log(loading);
    const location = useLocation();

    if (loading) {
           return <progress className="progress w-56"></progress>
    }
    else if(user){
        return children;
    }
    else {

   return  <Navigate state={{ from: location }} to="/login" replace></Navigate>;
    }

}

export default PrivateRoute