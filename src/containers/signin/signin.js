import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './signin.css';
import { signin } from '../../actions/index';


class Signin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {username :'', Password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("I'm in handle submit");
    this.props.signin(this.state.username, this.state.password);
    console.log("I'm out handle submit");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
        <b>UserName:</b>
            <input value={this.state.username}
            onChange={event => this.setState({username: event.target.value})}/>
        
        </label>
        
        <br/>
        
        <label>
        <b className="password-label">Password:</b>
            <input value={this.state.password}
            onChange={event => this.setState({password: event.target.value})}/>
        
        </label>
        <br/>
        <br/>

        <input className="submit-btn" type="submit" value="Submit" />
      </form>


        
    );
  }
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators({signin: signin}, dispatch) 
  
}




export default connect(null,mapDispatchToProps)(Signin);





