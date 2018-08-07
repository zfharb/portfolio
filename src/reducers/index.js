import { combineReducers } from 'redux';
import outputReducer from './outputReducer';


const counterApp = combineReducers({
  output: outputReducer
})

export default counterApp
