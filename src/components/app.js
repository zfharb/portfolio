import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import About from './about';
import Reach from './reach';
import Work from './work';

import './app.css'


const App =() => {
    return (
      <BrowserRouter>
    	<div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/reach" component={Reach} />
          <Route path="/work" component={Work} />

        </div>          
      </BrowserRouter>
    );

}

export default App;
