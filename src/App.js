import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Router from "./router";
import { connect } from "react-redux";
import setUser from "store/actions/user/setUser.js"
import jwt_decode from "jwt-decode";
import "sass/style.scss";

const App = ({dispatch}) => {
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("AUTH_TOKEN")
    if (token) {
      axios({
        method: 'get',
        url: `https://SwiftChatServer.ahmedbahloul.repl.co/auth`,
        headers: {
          'Authorization': `BEARER ${token}` 
        }
      })
      .then(()=> dispatch(setUser({data: jwt_decode(token), token})))
      .catch(() => {return ;})
      .finally(()=> setLoadingUser(false))
      return;
    }
    setLoadingUser(false);
  }, [])

  return <>
    {loadingUser?"loading":<Router />}
  </>
};

export default connect()(App);