import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
    return (
        <div className="side-bar">
            <NavLink to="/panel/chat" className="fas fa-user-friends side-icon"></NavLink>
            <NavLink to="/panel/search-frnd" className="fas fa-search-plus side-icon"></NavLink>
            <div className="bottom-side-icon-container">
            <i className="fas fa-list side-icon"></i>
            </div>
        </div>
    )
}

export default SideBar;