import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './pulse.css'

class Pulse extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id={this.props.name} className="pulse">
				event from {this.props.name} at {this.props.date.toLocaleTimeString()}
			</div>
		);
	}
}


function mapStateToProps(state) {
  return {pulse: state.pulse};
}

export default connect(mapStateToProps,null)(Pulse);
