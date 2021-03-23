import React from "react";

const SideBar = (props) => {
    return (
        <div className="side-bar">
            <i class="fas fa-user-friends side-icon"></i>
            <i class="fas fa-search-plus side-icon"></i>
            <div className="bottom-side-icon-container">
            <i class="fas fa-list side-icon"></i>
            </div>
        </div>
    )
}

export default SideBar;