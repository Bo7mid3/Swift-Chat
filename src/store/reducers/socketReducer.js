const socketReducer = (state = null, action) => {
    switch(action.type) {
      case "SET_SOCKET": return action.socket;
      default: return state;
    }
}

export default socketReducer;