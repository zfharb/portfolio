import React, { Component } from 'react';
import {connect} from 'react-redux'

import './menu.css'

class Menu extends Component {

	constructor(props) {
    super(props);
    
    this.state = {navBars: true};
    this.toggleMenu = this.toggleMenu.bind(this);

  }

	toggleMenu(event) {
    	 this.setState({
      		navBars: !this.state.navBars
    	})
	}

  	render() {
  		const menu = this.state.navBars ? 'container' : 'change';

    	return (
			<div className={`${menu}`} onClick={this.toggleMenu}>
  				<div className="bar1"></div>
  				<div className="bar2"></div>
  				<div className="bar3"></div>
			</div>
    	);
	}
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(Menu);

