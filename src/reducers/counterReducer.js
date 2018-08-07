import * as actionType from '../actions/actionType';

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
       
    case actionType.SIGNIN:
    	console.log("I made it");
      return newState = state;
    
    default:
      return state
  }
}

export default counterReducer;
