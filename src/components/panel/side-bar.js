import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props) => {
    return (
        <div className="side-bar">
            <Link to="/" class="fas fa-user-friends side-icon"></Link>
            <Link to="/search-frnd" class="fas fa-search-plus side-icon"></Link>
            <div className="bottom-side-icon-container">
            <i class="fas fa-list side-icon"></i>
            </div>
        </div>
    )
}

export default SideBar;