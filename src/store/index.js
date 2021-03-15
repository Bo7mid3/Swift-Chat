import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import INIT_STATE from './INIT_STATE.js';
import {combineReducers} from "redux"
import setUserReducer from './reducers/setUserReducer';

const store = createStore(combineReducers({user: setUserReducer}), INIT_STATE , applyMiddleware(thunk));

export default store;