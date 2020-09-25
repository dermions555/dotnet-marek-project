import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        false === true //TODO: Change this when we have authentication service ready
            ? <Component {...props} />
            : <Redirect to='/dashboard' />
    )} />
);

export default PrivateRoute;
