import * as actionType from './actionType';
import axios from 'axios';

const SIGNIN_URL = ``

export const signin  = (userName, password) => {

	const url = 'https://api-test2.adtpulse.com/ng/rest/adt/access/login';
	var basicAuth = 'Basic ' + btoa(userName + ':' + password);
	
  console.log(url);

  const request = axios.post(url, {}, {
  	headers: { 'Authorization': + basicAuth }
	});
  console.log(request);



return {
      type: actionType.SIGNIN,
      payload: request
      };

};

