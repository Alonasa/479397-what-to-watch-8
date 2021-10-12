import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export type PrivateRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;


function PrivateRoute ({isAuthenticated, authenticationPath, ...routeProps}: PrivateRouteProps):JSX.Element {
  return (isAuthenticated ? <Route {...routeProps}/> : <Redirect to={{pathname: authenticationPath }}/>);
}

export default PrivateRoute;
