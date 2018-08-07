import * as actionType from './actionType';
import axios from 'axios';

const SIGNIN_URL = ``

export const signin  = (userName, password) => {
	console.log(userName);
		console.log(password);

  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  	console.log(url);

  // const request = axios.get(url);
    	console.log(url);



return {
      type: actionType.SIGNIN,
      payload: 1
      }

};

