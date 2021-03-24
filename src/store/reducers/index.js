import {combineReducers} from "redux";
import selectedReducer from './selectedReducer';
import friendsReducer from './friendsReducer.js';
import socketReducer from './socketReducer';
import lastMsgReducer from './lastMsgReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

const Reducer = combineReducers({ search: searchReducer ,user: userReducer, friends: friendsReducer, selected: selectedReducer, socket: socketReducer, lastMsg: lastMsgReducer });

export default Reducer;