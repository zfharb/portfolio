import * as actionType from './actionType';
import axios from 'axios';

const SIGNIN_URL = ``

export const signin  = (userName, password) => {
	
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  console.log(url);

  const request = axios.get(url);
  console.log(request);



return {
      type: actionType.SIGNIN,
      payload: request
      };

};

