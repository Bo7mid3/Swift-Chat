import React from 'react'
import { BrowserRouter , Route, Redirect } from "react-router-dom";
import Login from "components/login";
import Panel from "components/panel";
import ProtectedRoute from "./protected-route";

const Router = (props) => (
  <BrowserRouter>
    <ProtectedRoute exact path="/" component={Panel} />
    <Route exact path="/login" component={Login} />
  </BrowserRouter>
)

export default Router;