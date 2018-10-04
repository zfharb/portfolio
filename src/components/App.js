import React, { Component } from 'react';
import {connect} from 'react-redux'

import Menu from '../containers/menu/menu';
import Picture from './picture';


import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {isProfilePage: false};
    this.openProfilePage = this.openProfilePage.bind(this);


  }

  openProfilePage(event) {

       this.setState({
          isProfilePage: !this.state.isProfilePage
      })

  }

    render() {

      return (
     <div className="background">

      {this.state.isProfilePage ? (
          <div className="background">
          <Picture/>
          <Menu className="change" triggerProfilePage={this.openProfilePage}/>
        </div>
      ) : (
        <div className="background">
          <h1>Ziad Harb</h1>
          <h2 >Web Developer</h2>
          <Menu className="container" triggerProfilePage={this.openProfilePage}/>
        </div>

      )}
    
    </div>
      );
  }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(App);
