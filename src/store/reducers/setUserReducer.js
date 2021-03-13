import INIT_STATE from '../INIT_STATE'

const setUserReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
      case "SET_USER": return action.userData;
      default: return state;
    }
}

export default setUserReducer;