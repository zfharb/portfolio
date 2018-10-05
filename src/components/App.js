import React, { Component } from 'react';
import {connect} from 'react-redux'

import Menu from '../containers/menu/menu';
import Picture from './picture';
import Profile from './profile';


import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {isProfilePage: false,
                  isMenuBars: true,
                  menuClassName: 'container',
                  showProfile: false};
    
    this.openProfilePage = this.openProfilePage.bind(this);


  }

  openProfilePage(event) {

       this.setState({
          isProfilePage: !this.state.isProfilePage,
          isMenuBars: !this.state.isMenuBars
        })

  }

    render() {
      const menu = this.state.isMenuBars ? 'container' : 'change';
      return (
        <div className="main-page-background">

          <Picture showProfile={this.state.showProfile}/>
          <Profile showProfile={this.state.showProfile}/>
          
          <h1>Ziad Harb</h1>
          <h2 >Web Developer</h2>
          <Menu className={menu} triggerProfilePage={this.openProfilePage}/>


      
        </div>
      )
    }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(App);
