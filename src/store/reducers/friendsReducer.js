const friendsReducer = (state = null , action) => {
    console.log(action);
    switch(action.type) {
      case "SET_FRIENDS": return action.friends;
      case "ADD_FRIEND": return [...state, action.friend];
      case "DEL_FRIEND": return state.filter((friend)=> friend.username != action.friend);
      default: return state;
    }
}

export default friendsReducer;