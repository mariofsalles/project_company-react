import React from 'react';
import {Link} from 'react-router-dom';

const AdminMenu = props =>{
	return(
		<div className='list-group'>
			<a href='#' className='list-group-item'>Avatar</a>
			<Link to = '/admin/portfolio' className='list-group-item'>Portfolio</Link>
			<a href='#' className='list-group-item'>Dados Pessoais</a>
			<a href='#' className='list-group-item'>Agenda</a>
		</div>
	);
}

export default AdminMenu;