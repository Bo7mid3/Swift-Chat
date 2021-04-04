import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import setUser from "store/actions/user/setUser.js";
import axios from "axios";

const Login = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [failed, setFailed] = useState(null);

  const onSubmit = (data) => {
    const username = data.username;
    axios({
      method: "post",
      url: `https://SwiftChatServer.ahmedbahloul.repl.co/login`,
      data,
    })
      .then(({ data }) => {
        localStorage.setItem("AUTH_TOKEN", data);
        props.dispatch(setUser({ data: { username }, token: data }));
        const { from } = props.location.state || { from: { pathname: "/" } };
        props.history.push(from.pathname);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setFailed(err.response.data);
          return;
        }
        setFailed("An error acquired, please try again");
      });
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required="required"
            name="username"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
            name="password"
            ref={register({ required: true })}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </div>
        <div className="clearfix">
          <label className="pull-left checkbox-inline">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="pull-right">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center">
        <a href="#">Create an Account</a>
      </p>
    </div>
  );
};

{
  /*<form onSubmit={handleSubmit(onSubmit)}>
      {failed}
      <input name="username" palceholder="Username" ref={register({ required: true })} />
      <input name="password" type="password" palceholder="Password" ref={register({ required: true })} />
      <input type="submit" />
  </form>*/
}

export default connect()(Login);
