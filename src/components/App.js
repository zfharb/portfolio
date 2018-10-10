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
                  firstTimeToPage: true,
                  isPortfolioOpen: false};
    
    this.openProfilePage = this.openProfilePage.bind(this);


  }

  openProfilePage(event) {

       this.setState({
          isMenuBars: !this.state.isMenuBars,
          firstTimeToPage: false,
          isPortfolioOpen: !this.state.isPortfolioOpen
        })

  }



  render() {
    const menu = this.state.isMenuBars ? 'container' : 'change';
    return (
      <div className="wrapper">
        <div id="name-title">
          <h1> Ziad Harb</h1>
          <h2>Web Developer</h2>
        </div>
        {/* <div id="home-button">
          <button className="main-page-home-button" 
            onClick={this.openProfilePage}><p>click here to close portfolio</p>
          </button>   
        </div> */}
        <a href="" id="about-me">about me</a>
        <a href="" id="my-work">my work</a>
        <a href="" id="reach-me">how to reach me</a>

        <div className="left-side">
          <LeftSlider 
          firstTimeToPage={this.state.firstTimeToPage} 
          openPortfolio={this.state.isPortfolioOpen}/>
        </div>
        
        <div className="right-side">
          <RightSlider 
          firstTimeToPage={this.state.firstTimeToPage}
          showSlider={this.state.isMenuBars}
          triggerProfilePage={this.openProfilePage}/>
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
