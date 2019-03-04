import React, {Component} from 'react';

import  config, {storage} from './../firebase_config';

class AdminPortfolio extends Component{

	constructor(props){
    super(props);

    this.portfolioSave = this.portfolioSave.bind(this);
  }
  
  portfolioSave(event){
    console.log('Gravando');
    
    console.log(this.title.value);
    console.log(this.description.value);
    console.log(this.image);


    event.preventDefault();
  }

  render(){
		return(
      <div style={{padding: '0px 120px'}}>
        <h2>Portfolio - Área Administrativa</h2>

        <form onSubmit = {this.portfolioSave}>

          <div className='form-group'>
            <input type='text' className='form-control' id='title' placeholder='Title' ref = {(ref)=>this.title = ref}/>
          </div>

          <div className='form-group'>
            <textarea className='form-control' id = 'description'  placeholder='Description' rows="3" ref = {(ref)=>this.description = ref}></textarea>
          </div>
         
          <div className="form-group">
            <input type="file" id="imageFile" ref = {(ref)=>this.imageFile = ref}/>
          </div>

          <button type='submit' className='btn btn-default'>Send</button>
          
        </form>
      </div>
		);
	}
}

export default AdminPortfolio;