import React from 'react';

import Signin from '../containers/signin/signin';
import Output from '../containers/output/output';

import './App.css'
import swiss from './images/swiss.jpg'; // Tell Webpack this JS file uses this image


const App = () => {
  return (
    <div className="container">

		<header/>
		<div className="my-picture"/>

		<div className="flex-container">
  			<div>resume</div>
  			<div>LinkedIn Profile</div>
  			<div>Github</div>  
		</div>


    <br/>
    <Signin/>
    <br/>
    <Output/>
    </div>

  )
}
export default App;
