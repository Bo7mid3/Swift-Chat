import React, { useState } from "react";
import { connect } from "react-redux";

const TypeMsg = ({socket}) => {

    const [ message, setMessage ] = useState("");

    const submitMsg = () => {
        socket.emit("message", message);
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

export default connect(({socket})=>({socket}))(TypeMsg);