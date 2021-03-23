import React, {useState, useEffect} from "react";
import InboxChat from "./inbox-chat/";
import Mesgs from "./mesgs/"
import { connect } from "react-redux";
import startEventListener from "api/socket.io/startEventListener";
import SideBar from "./side-bar";

const Panel = ({friends}) => {
  useEffect(()=>{
    startEventListener();
  },[])

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <SideBar />
        <div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4>Recent</h4>
            </div>
            <div className="srch_bar">
              <div className="stylish-input-group">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search"
                />
                <span className="input-group-addon">
                  <button type="button">
                    {" "}
                    <i className="fa fa-search" aria-hidden="true" />{" "}
                  </button>
                </span>{" "}
              </div>
            </div>
          </div>
          <InboxChat />
        </div>
        <Mesgs />
      </div>
    </div>
  );
};

export default connect((state)=> ({friends: state.friends}))(Panel);
