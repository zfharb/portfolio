import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux'


import './about.css'

class About extends Component {

  constructor(props) {
    super(props);
    
    
  }

  


  render() {
  
    return (
      <div>
    about page
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {output: state.output};
}

export default connect(mapStateToProps,null)(About);
