import Spinner from "components/shared/spinner";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import setUser from "store/actions/user/setUser.js";
import { useHistory } from "react-router-dom";

const Logout = ({ dispatch }) => {
  const history = useHistory();
  useEffect(() => {
    localStorage.setItem("AUTH_TOKEN", null);
    dispatch(setUser(null));
    history.push("/login");
  }, []);

  return <Spinner />;
};

export default connect()(Logout);
