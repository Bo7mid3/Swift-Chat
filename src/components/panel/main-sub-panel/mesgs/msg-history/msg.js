import React from "react";
import { connect } from "react-redux";
import { getMsgDate } from "utils/"

const Msg = (props) => {
  const { content, sender, time } = props.msg;
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
            <span className="time_date">{ getMsgDate(time) }</span>
          </div>
        </div>
      </div>
    );
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{content}</p>
        <span className="time_date">{ getMsgDate(time) }</span>{" "}
      </div>
    </div>
  );
};

export default connect(({user : { data : { username } } }) => ({ username }))(Msg);
