import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import About from '../containers/about';

import './app.css'


const App =() => {
    return (
      <BrowserRouter>
    	<div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
        </div>          
      </BrowserRouter>
    );

}

export default App;
