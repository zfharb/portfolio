import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';

import Menu from './menu';
import LeftSlider from '../components/left-slider';
import RightSlider from '../components/right-slider';


import './home.css'

class Home extends Component {

  constructor(props) {
    super(props);
    
    this.state = {isOpenSiteBarsClicked: false,
                  menuClassName: 'container',
                  firstTimeToPage: true};
    
    this.openProfilePage = this.openProfilePage.bind(this);


  }

  openProfilePage(event) {

       this.setState({
          isOpenSiteBarsClicked: !this.state.isOpenSiteBarsClicked,
          firstTimeToPage: false})

  }



  render() {
    const menu = this.state.isOpenSiteBarsClicked ? 'change' : 'container';
    return (
     
      <div className="wrapper">
          <h1 className="name"> Ziad Harb</h1><br/>
          <h2 className="title">Web Developer</h2><br/>

        {/* <div id="home-button">
          <button className="main-page-home-button" 
            onClick={this.openProfilePage}><p>click here to close portfolio</p>
          </button>   
        </div> */}
       
        <Link to="/about" className="about-me">about me</Link>
        <Link to="/work" className="my-work">my work</Link>
        <Link to="/reach" className="reach-me">how to reach me</Link>

        

        
          <LeftSlider 
          firstTimeToPage={this.state.firstTimeToPage}
          isOpenProfile={this.state.isOpenSiteBarsClicked}/>
        
        
          <RightSlider
          firstTimeToPage={this.state.firstTimeToPage}
          isOpenProfile={this.state.isOpenSiteBarsClicked}/>
        
      <Menu className={menu} triggerProfilePage={this.openProfilePage}/>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(Home);
