import React, {useEffect} from "react";
import { connect } from "react-redux";

const Msg = (props) => {
  const { content, sender } = props.msg;
  if (sender != props.username)
    return (
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
            <p>{content}</p>
            <span className="time_date"> 11:01 AM | Today</span>
          </div>
        </div>
      </div>
    );
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{content}</p>
        <span className="time_date"> 11:01 AM | Today</span>{" "}
      </div>
    </div>
  );
};

export default connect(({user : { data : { username } } }) => ({ username }))(Msg);
