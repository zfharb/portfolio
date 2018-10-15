import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import {bindActionCreators} from 'redux'

import Menu from './menu';
import LeftSlider from '../components/left-slider';
import RightSlider from '../components/right-slider';
import { ClickOpenSiteBars } from '../actions/index';


import './home.css'

class Home extends Component {

  constructor(props) {
    super(props);
    
    this.state = {menuClassName: 'container'};
    
    this.openProfilePage = this.openProfilePage.bind(this);


  }

  openProfilePage(event) {

       this.props.ClickOpenSiteBars(this.props.siteStatus.isOpenSiteBarsClicked, this.props.siteStatus.isFirstTimeToSite);

  }



  render() {
    const menu = this.props.siteStatus.isOpenSiteBarsClicked ? 'change' : 'container';
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
          firstTimeToPage={this.props.siteStatus.isFirstTimeToSite}
          isOpenProfile={this.props.siteStatus.isOpenSiteBarsClicked}/>
        
        
          <RightSlider
          firstTimeToPage={this.props.siteStatus.isFirstTimeToSite}
          isOpenProfile={this.props.siteStatus.isOpenSiteBarsClicked}/>
        
      <Menu className={menu} triggerProfilePage={this.openProfilePage}/>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {siteStatus: state.siteStatus};
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ClickOpenSiteBars: ClickOpenSiteBars}, dispatch) 
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
