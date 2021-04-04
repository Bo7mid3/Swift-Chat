import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const SideBar = ({username}) => {

    const history = useHistory();

    const signOut = () => {
        history.push("/logout");
    }

    return (
        <div className="side-bar">
            <NavLink to="/panel/chat" className="fas fa-user-friends side-icon"></NavLink>
            <NavLink to="/panel/search-frnd" className="fas fa-search-plus side-icon"></NavLink>
            <div className="bottom-side-icon-container">
                <i className="fas fa-list side-icon"></i>
                <div className="side-icon user-side-img">
                    <img
                        className="user-img"
                        style={{width: "65%"}}
                        src={`https://SwiftChatServer.ahmedbahloul.repl.co/user-img/${username}`}
                        alt="sunil"
                    />
                </div>
                <i className="fas fa-sign-out-alt side-icon r-180" onClick={signOut}></i>
            </div>
        </div>
    )
}

export default connect(({user : { data : { username } } }) => ({ username }))(SideBar);