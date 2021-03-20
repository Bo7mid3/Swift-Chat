const lastMsgReducer = (state = null, action) => {
    console.log(action)
    switch(action.type) {
      case "SET_LAST_MSG": return action.msg;
      default: return state;
    }
}

export default lastMsgReducer;