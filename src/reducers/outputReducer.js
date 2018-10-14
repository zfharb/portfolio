import * as actionType from '../actions/actionType';

const outputReducer = (state = [], action) => {
    	console.log(action);

  switch (action.type) {

    case actionType.SIGNIN:

    	console.log("I'm in SIGNIN reducer");
    	
      	return [action.payload.data, ...state];
      	

    default:
        	console.log("I made it in default reducer");

    	return state;
  }


}

export default outputReducer;
