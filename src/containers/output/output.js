import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './output.css'

class Output extends Component {

  renderElements(data) {
    return (
        <p key={data.id}>{data.title}</p>
      );

  }
  
  render() {
    return (

		<div className="rectangle">

    {this.props.output.map(this.renderElements)}
		</div>        
    
    );
  }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(Output);
