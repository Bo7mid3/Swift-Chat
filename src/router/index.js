import React from 'react'
import { BrowserRouter , Route, Redirect } from "react-router-dom";
import Login from "components/login";
import Panel from "components/panel";
import ProtectedRoute from "./protected-route";
import Register from "components/register"
import logout from 'components/logout';
import OutRoute from './out-route';

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" render={()=> <Redirect to={{ pathname: "/panel" }} /> } />
    <Route path="/logout" component={logout} />
    <OutRoute path="/login" component={Login} />
    <OutRoute path="/register" component={Register} />
    <ProtectedRoute path="/panel" component={Panel} />
  </BrowserRouter>
)

export default Router;