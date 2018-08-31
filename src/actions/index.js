import * as actionType from './actionType';
import axios from 'axios';

const SIGNIN_URL = ``

export const signin  = (userName, password) => {


  	const url = 'https://api-test2.adtpulse.com/ng/rest/adt/access/login';
  	var headers = {
            'X-Appkey': 'XahAvedeZeJmeLeTeDEburyubAqUnu6uXe',
            'X-Appversion': 'Pulse/7.6.0',
            'X-Clienttype': 'CUSTOM_ANDROID',
            'X-Expires': '18000000',
            'X-Format': 'json',
            'X-Locale': 'en_us',
            'X-Login': 'automationadt@mailinator.com',
            'X-Password': 'Adt12345',
            'X-Version': '4.4'
        }

	// var basicAuth = 'Basic ' + btoa(userName + ':' + password);

    // const request = 
    var x;
    axios.post(url, {}, {headers}).then(res => {

    	x = res.data.detail;
    	console.log(x);

        const event_url = 'https://api-test2.adtpulse.com/ng/rest/adt/ui/operations?method=POST&action=/rest/adt/ui/client/history/getEvents';
  	    var event_headers = {
  				'Content-Type': 'application/x-www-form-urlencoded',
				  'X-Token': res.data.detail,
         'X-Appkey': 'XahAvedeZeJmeLeTeDEburyubAqUnu6uXe',
           'X-Appversion': 'Pulse/7.6.0',
           'X-Clienttype': 'CUSTOM_ANDROID',
           'X-Format': 'json',
           'X-Locale': 'en_us',
           'X-Login': 'automationadt@mailinator.com',
           'X-Version': '4.4'
        }
  			    		console.log("I'm ging to the seond post");

    		axios.post(event_url, {}, {event_headers}).then(res2=> {
  			    		console.log("I'm in the seond post");
    					console.log(res2.data);

    		});
		}

    	);
   //  const event_url = 'https://api-test2.adtpulse.com/ng/rest/adt/ui/operations?method=POST&action=/rest/adt/ui/client/history/getEvents';
  	// var event_headers = {
  	// 			'Content-Type': 'application/x-www-form-urlencoded',
			// 	'X-Token': x
   //  }

   //  		const event_request = axios.post(event_url, {}, {event_headers});
   //  		console.log(event_request);

	return {
      type: actionType.SIGNIN,
      payload: 1
      };

};

