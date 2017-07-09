import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isLoggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          search: '?redirect=' + props.location.pathname,
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}

export default PrivateRoute;
