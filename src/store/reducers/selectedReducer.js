const selectedReducer = (state = null, action) => {
    switch(action.type) {
      case "SET_SELECTED": return action.username;
      default: return state;
    }
}

export default selectedReducer;