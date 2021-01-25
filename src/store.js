import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from "redux-logger";
import stonerBasedReducer from "./reducers/stonerBasedReducers";

const store = createStore(
    stonerBasedReducer, applyMiddleware(logger, thunk));

export default store;