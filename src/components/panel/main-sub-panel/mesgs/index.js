import React from "react";
import MsgHistory from "./msg-history/index";
import TypeMsg from "./type-msg"

const Mesgs = () => {
  return (
    <div className="mesgs">
      <MsgHistory />
      <TypeMsg />
    </div>
  );
};

export default Mesgs;
