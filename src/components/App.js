import React from 'react';

import RemoveCounter from '../containers/RemoveCounter';
import Signin from './signin/signin';
import Output from './output/output';

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
