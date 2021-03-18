const userReducer = (state = null, action) => {
    switch(action.type) {
      case "SET_USER": return action.userData;
      default: return state;
    }
}

export default userReducer;