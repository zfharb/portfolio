import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../containers/home';
import About from '../containers/about';

import './app.css'

class App extends Component {
	render() {
    return (

      <Router>
    	<div>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </div>          
      </Router>
    );
}
}

export default App;