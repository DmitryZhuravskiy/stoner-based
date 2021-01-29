import { combineReducers } from 'redux'
import stonerReducer from './stonerReducer';
 
const rootReducer =combineReducers({
    stoner: stonerReducer
})
 
export default rootReducer;
