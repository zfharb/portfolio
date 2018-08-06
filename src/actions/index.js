import * as actionType from './actionType';
import axios from 'axios';

const SIGNIN_URL = ``

export const signin  = (userName, password) => {

  const url = `${SIGNIN_URL}&${userName}&${password}`;
  const request = axios.get(url);


return {
      type: actionType.SIGNIN,
      payload: request
      }

};

