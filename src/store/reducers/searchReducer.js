const searchReducer = (state = null, action) => {
    switch(action.type) {
      case "SET_SEARCH": return action.search;
      default: return state;
    }
}

export default searchReducer;