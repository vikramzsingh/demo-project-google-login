import React from 'react';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    console.log(`authentication value: ${authenticated}`)
    return (
        <Route {...rest}
      render={
        props => authenticated === true ?
          <Component {...props} />
          :
          <Redirect to='/' />
      }
    />
    );
}

