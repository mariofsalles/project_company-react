import React, {Component} from 'react';

import {auth} from './../firebase_config';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthorized: false,
      isLogedOn: true,
      error: false
    }

    this.email = null;
    this.pwd = null;

    this.authUser = this.authUser.bind(this);
  }

  authUser(){
    this.setState({isAuthenticated: true, error: false})
    auth.signInWithEmailAndPassword(this.email.value, this.pwd.value)
    .then(user => {
      console.log('Usuario logado: ', user)
      this.setState({isLogedOn: true})
    })
    .catch(err => {
      console.log('Erro: ', err)
      this.setState({error: true, isLogedOn:false})
    })
  }

  render(){

    if (this.state.isAuthenticated) {
      
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
          <button type="button" className="btn btn-default btn-success" onClick={this.authUser}>Submit</button>
      </div>
    )
  }
}

export default Login;
