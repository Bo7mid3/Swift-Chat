import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import setUser from "store/actions/user/setUser.js";
import axios from "axios";

const Login = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [failed, setFailed] = useState(null)

  useEffect(() => {
    if (props.location.state.signOut) {
      localStorage.setItem("AUTH_TOKEN", null);
      props.dispatch(setUser(null));
    }
  },[])

  const onSubmit = data => {
      const username = data.username
      axios({
        method: 'post',
        url: `https://SwiftChatServer.ahmedbahloul.repl.co/login`,
        data
      }).then(({data})=> {
        localStorage.setItem("AUTH_TOKEN", data)
        props.dispatch(setUser({data: {username}, token: data}))
        const { from } = props.location.state || { from: { pathname: '/' }};
        props.history.push(from.pathname);
      })
      .catch(err => {
        if (err.response && err.response.data) {
          setFailed(err.response.data)
          return;
        }
        setFailed("An error acquired, please try again")
      })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {failed}
      <input name="username" palceholder="Username" ref={register({ required: true })} />
      <input name="password" type="password" palceholder="Password" ref={register({ required: true })} />
      <input type="submit" />
    </form>
  ); 
}

export default connect()(Login);