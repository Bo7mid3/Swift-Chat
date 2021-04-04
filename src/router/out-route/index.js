import React from "react";
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import store from "store/index.js";

const OutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      store.getState().user ? 
        <Redirect to="/panel"/>:<Component {...props} />   
   )} />
)

export default OutRoute;