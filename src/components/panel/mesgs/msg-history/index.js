import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Msg from "./msg";

const MsgHistory = ({ selected, token, lastMsg, username }) => {
  const [msgHistory, setHistory] = useState([]);
  const didMount = useRef(false);

  useEffect(()=> {
    if (!selected)
        return;
    axios({
        method: "get",
        url: `https://SwiftChatServer.ahmedbahloul.repl.co/history/${selected}`,
        headers: {
          Authorization: `BEARER ${token}`,
        },
      }).then(({data}) => { setHistory(data) });
  },[selected])

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    if ( lastMsg.from && lastMsg.from == selected )
        setHistory([...msgHistory,{ content: lastMsg.content, sender: selected }])
    else if ( lastMsg.to && lastMsg.to == selected )
        setHistory([...msgHistory,{ content: lastMsg.content, sender: username }])
  }, [lastMsg]);

  return (
    <div className="msg_msgHistory">
      {msgHistory ? msgHistory.map((msg) => <Msg msg={msg} />) : null}
    </div>
  );
};

export default connect(({ user: { data: { username }, token },selected, lastMsg }) => ({
  selected,
  token,
  lastMsg,
  username
}))(MsgHistory);

/*      <div className="incoming_msg">
        <div className="incoming_msg_img">
          {" "}
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />{" "}
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>Test which is a new approach to have all solutions</p>
            <span className="time_date"> 11:01 AM | June 9</span>
          </div>
        </div>
      </div>
      <div className="outgoing_msg">
        <div className="sent_msg">
          <p>Test which is a new approach to have all solutions</p>
          <span className="time_date"> 11:01 AM | June 9</span>{" "}
        </div>
      </div>
      <div className="incoming_msg">
        <div className="incoming_msg_img">
          {" "}
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />{" "}
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>Test, which is a new approach to have</p>
            <span className="time_date"> 11:01 AM | Yesterday</span>
          </div>
        </div>
      </div>  */
