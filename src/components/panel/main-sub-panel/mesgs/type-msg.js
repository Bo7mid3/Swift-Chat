import React, { useState } from "react";
import { connect } from "react-redux";
import { getSocketId } from "utils/";
import axios from "axios";
import setLastMsg from "store/actions/lastMsg/setLastMsg";

const TypeMsg = ({socket, selected, token, dispatch}) => {

    const [ message, setMessage ] = useState("");

    const submitMsg = () => {
        if (selected == null) return;
        const frndSocket = getSocketId(selected);
        if (frndSocket) {
          let msg = { content:message, to: frndSocket };
          socket.emit("message", msg);
        }
        else {
          let msg = { content:message, to: selected };
          axios(
            {
              method: "post",
              url: `https://SwiftChatServer.ahmedbahloul.repl.co/send-msg`,
              headers: {
                Authorization: `BEARER ${token}`,
              },
              data: msg
            }
          )
          .then(({data}) => {dispatch(setLastMsg(data))})
          .catch((err) => { console.log(err) })
        }
        setMessage("")
    }

  return (
    <div className="type_msg">
      <div className="input_msg_write">
        <input type="text" value={message} onChange={(event)=> { setMessage(event.target.value) }} className="write_msg" placeholder="Type a message" />
        <button className="msg_send_btn" type="button" onClick={submitMsg}>
          <i className="fa fa-paper-plane-o" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default connect(({socket, selected, user: { token }})=>({ socket, selected, token }))(TypeMsg);