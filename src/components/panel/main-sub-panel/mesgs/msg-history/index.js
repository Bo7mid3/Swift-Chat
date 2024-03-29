import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Msg from "./msg";
import Spinner from "components/shared/spinner";

const MsgHistory = ({ selected, token, lastMsg, username }) => {
  const [msgHistory, setHistory] = useState(null);
  const didMount = useRef(false);

  useEffect(()=> {
    if (!selected)
        return;
    setHistory("loading");
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
        setHistory([...msgHistory,{ content: lastMsg.content, sender: selected, time: lastMsg.time }])
    else if ( lastMsg.to && lastMsg.to == selected )
        setHistory([...msgHistory,{ content: lastMsg.content, sender: username, time: lastMsg.time }])
  }, [lastMsg]);

  return (
    <div className="msg_history">
      {msgHistory=="loading" ? <Spinner /> : msgHistory ? msgHistory.map((msg) => <Msg msg={msg} />) : <div className="no-selected"><p>Select a friend to talk to </p></div> }
    </div>
  );
};

export default connect(({ user: { data: { username }, token },selected, lastMsg }) => ({
  selected,
  token,
  lastMsg,
  username
}))(MsgHistory);
