import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from "redux"
import userReducer from './reducers/userReducer';
import friendsReducer from './reducers/friendsReducer.js';

const store = createStore(combineReducers({user: userReducer, friends: friendsReducer}), applyMiddleware(thunk));

export default store;