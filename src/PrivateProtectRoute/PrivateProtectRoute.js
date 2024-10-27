import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { LoginContext } from '../contexts/LoginContext';


export default function PrivateProtectRoute({ children }) {
    const { isLogin } = useContext(LoginContext);

    if (localStorage.getItem('isLogin') !== 'true') {
        return <Navigate to="/login" replace />;
    }

    return children;
}


