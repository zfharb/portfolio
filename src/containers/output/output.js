import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './output.css'

class Output extends Component {

  // renderElements(data) {
  //   return (
  //       <p key='1'>{data.detail}</p>

  //     );

  // }
  
  render() {
    return (

		<div className="rectangle">
hello
		</div>        
    
    );
  }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(Output);
