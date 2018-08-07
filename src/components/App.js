import React from 'react';

import Signin from '../containers/signin/signin';
import Output from '../containers/output/output';

import './App.css'


const App = () => {
  return (
    <div className="container">
      
    <h1 className="header">Stream   Parser</h1>
    <br/>
    <Signin/>
    <br/>
    <Output/>
    </div>

  )
}
export default App;
