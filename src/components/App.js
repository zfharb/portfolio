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
                  firstTimeToPage: true};
    
    this.openProfilePage = this.openProfilePage.bind(this);


  }

  openProfilePage(event) {

       this.setState({
          isProfilePage: !this.state.isProfilePage,
          isMenuBars: !this.state.isMenuBars,
          firstTimeToPage : false
        })

  }



  render() {
    const menu = this.state.isMenuBars ? 'container' : 'change';
    return (
      <div className="main-page-background">
        <Picture firstTimeToPage={this.state.firstTimeToPage} showProfile={this.state.isProfilePage}/>
        <Profile firstTimeToPage={this.state.firstTimeToPage} showProfile={this.state.isProfilePage}/>
        <h1>Ziad Harb</h1>
        <h2>Web Developer</h2>
        <Menu className={menu} triggerProfilePage={this.openProfilePage}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(App);
