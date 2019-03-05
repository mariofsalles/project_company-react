import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {auth} from './../firebase_config';
import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';

class Admin extends Component{
	constructor(props){
		super(props);
		
		this.state = {
      isLoggingIn: true,
      isAuthenticated: false,
      user: null
    }

	
	}

	componentDidMount(){
		auth.onAuthStateChanged(user =>{
			this.setState({
				isLoggingIn: false,
				isAuthenticated: !!user,
				user
			});
		});
	}

	render(){

		if (this.state.isLoggingIn){
			return (
				<div className='container'>
					<p><span className="glyphicon glyphicon-refresh"/> Wait..</p>
				</div>
			);
		}

		if (!this.state.isAuthenticated){
			return <Redirect to='/login'/>
		}

		return(
			<div className='container'>
				<h2>Painel Administrativo</h2>
				<Route path = {`/`} component = {AdminMenu} />
				<Route path = {`${this.props.match.url}/portfolio`} component = {AdminPortfolio}/>
			</div>
		);

	}
}

export default Admin;