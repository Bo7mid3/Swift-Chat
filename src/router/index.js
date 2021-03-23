import React from 'react'
import { BrowserRouter , Route, Redirect } from "react-router-dom";
import Login from "components/login";
import Panel from "components/panel";
import ProtectedRoute from "./protected-route";

const Router = (props) => (
  <BrowserRouter>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute path="/" component={Panel} />
  </BrowserRouter>
)

export default Router;