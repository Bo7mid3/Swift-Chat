import React from "react";
import SrchBar from "../srch-bar";

const FriendSearch = () => {
    return (
        <div className="sub-panel">
            <div className="sub-panel-header">
                <div className="cur-heading">
                    <h4>Search</h4>
                </div>
                <SrchBar />
            </div>
            <div className="friend-search">
                <p>Type something in the search box to find users</p>
            </div>
        </div>)
}

export default FriendSearch;