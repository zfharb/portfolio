import React, { Component } from 'react';
import {connect} from 'react-redux'

import './menu.css'

class Menu extends Component {

	constructor(props) {
    super(props);

  }

  	render() {

    	return (
			<div className={this.props.className} onClick={this.props.triggerProfilePage }>
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

