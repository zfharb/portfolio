import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Pulse from '../pulse/pulse';

import './output.css'

class Output extends Component {

/*
	componentDidMount() {
		this.timerID = setInterval(
			() => tick(), 1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		// create a new Pulse div in the output div
	}
*/

  render() {
    return (
		<div className="rectangle">
			<h2>Pulse Events</h2>
			<Pulse name="Door Lock" date = {new Date()}/>
			<Pulse name="Motion Zone" date = {new Date()}/>
		</div>
    );
  }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(Output);
