import React from 'react'
import { Route, Redirect } from "react-router-dom";


export default function PrivateProtectRoute() {
    return (
        <Route
            {...rest}
            render={() =>
                userAuth ? <Component {...rest} /> : <Redirect to="/login" />
            }
        />
    )
}
