import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './output.css'

class Output extends Component {
  constructor(props) {
    super(props);
    
    this.state = {result :''};

  }

  render() {
    return (

		<div className="rectangle">
		{this.props.output}
		</div>        
    
    );
  }
}


function mapStateToProps(state) {
  return {output: state.counterReducer};
}

export default connect(mapStateToProps)(Output);
