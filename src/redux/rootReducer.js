import { combineReducers } from 'redux'
import stonerReducer from './stoner/stonerReducers'


const rootReducer = combineReducers({
    stoner: stonerReducer
})

export default rootReducer