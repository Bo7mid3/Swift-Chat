import React from "react";
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import store from "store/index.js";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      store.getState().user ? 
         <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
   )} />
)

export default ProtectedRoute;