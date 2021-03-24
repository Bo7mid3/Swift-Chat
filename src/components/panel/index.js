import React, {useState, useEffect} from "react";
//import InboxChat from "./sub-panel/inbox-chat";
import Mesgs from "./main-sub-panel/mesgs"
import { connect } from "react-redux";
import startEventListener from "api/socket.io/startEventListener";
import SideBar from "./side-bar";
import SideSubPanel from "router/side-sub-panel-router";
import SrchBar from "./side-sub-panel/srch-bar";

const Panel = () => {
  useEffect(()=>{
    startEventListener();
  },[])

  return (
    <div className="panel">
      <div className="panel-container">
        <SideBar />
        <SideSubPanel />
        <Mesgs />
      </div>
    </div>
  );
};

export default connect((state)=> ({friends: state.friends}))(Panel);
