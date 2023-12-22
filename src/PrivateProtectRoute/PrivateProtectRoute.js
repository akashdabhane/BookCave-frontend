import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { LoginContext } from '../contexts/LoginContext';


export default function PrivateProtectRoute({ children }) {
    const { isLogin } = useContext(LoginContext);

    console.log(typeof(localStorage.getItem('isLogin')))
    if (localStorage.getItem('isLogin') !== 'true') {
        return <Navigate to="/login" replace />;
    }

    return children;
}


