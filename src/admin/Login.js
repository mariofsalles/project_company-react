import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import {auth} from './../firebase_config';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggingIn: false,
      isAuthenticated: false,
      error: false
    }

    this.email = null;
    this.pwd = null;

    this.authUser = this.authUser.bind(this);
  }

  authUser(){
    this.setState({isLoggingIn: true, error: false});
    auth.signInWithEmailAndPassword(this.email.value, this.pwd.value)
    .then(user => {
      console.log('User is logged on: ', user);
      this.setState({isAuthenticated: true});
    })
    .catch(err => {
      console.log('Error: ', err);
      this.setState({error: true, isAuthenticated: false, isLoggingIn:false});
    });
  }

  render(){

    if (this.state.isAuthenticated) {
      return <Redirect to='/admin'/>
    }
    
    return(
      <div className = "container">
        <h1>Login</h1>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="example@email.com" name="email" ref={ref => this.email = ref}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" ref = {ref => this.pwd = ref}/>
            {this.state.error && <small id='emailHelp' className='form-text text-muted'>Autenticathe error</small>}
          </div>
          <button type="button" disabled = {this.state.isLoggingIn} className="btn btn-default btn-success" onClick={this.authUser}>Submit</button>
      </div>
    )
  }
}

export default Login;
