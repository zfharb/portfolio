import React, { Component } from 'react';
import {connect} from 'react-redux'

import Menu from '../containers/menu/menu';
import LeftSlider from './left-slider';
import RightSlider from './right-slider';


import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {isMenuBars: true,
                  menuClassName: 'container',
                  firstTimeToPage: true};
    
    this.openProfilePage = this.openProfilePage.bind(this);


  }

  openProfilePage(event) {

       this.setState({
          isMenuBars: !this.state.isMenuBars,
          firstTimeToPage : false
        })

  }



  render() {
    const menu = this.state.isMenuBars ? 'container' : 'change';
    return (
      <div className="wrapper">
        <div id="name-title">
          <h1> Ziad Harb</h1>
          <h2>Web Developer</h2>
          <ul className="list">
            <li >Home</li>
            <li>About me</li>
            <li>My work</li>
            <li>How to reach me</li>
          </ul>
        </div>
        <div className="left-side">
          <LeftSlider firstTimeToPage={this.state.firstTimeToPage} showSlider={this.state.isMenuBars}/>
        </div>
        
        <div className="right-side">
          <RightSlider firstTimeToPage={this.state.firstTimeToPage} showSlider={this.state.isMenuBars}/>
        </div>
        <Menu className={menu} triggerProfilePage={this.openProfilePage}/>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(App);
