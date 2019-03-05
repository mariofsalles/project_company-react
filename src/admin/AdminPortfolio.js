import React, {Component} from 'react';

import  config, {storage} from './../firebase_config';

class AdminPortfolio extends Component{

	constructor(props){
    super(props);

    this.state = {
      isRecording: false,

    }

    this.portfolioSave = this.portfolioSave.bind(this);
  }
  
  portfolioSave(event){
    
    const itemPortifolio = {
      title: this.title.value,
      description: this.description.value,
      image: this.imageFile
    }
    this.setState({isRecording: true});
    const file = itemPortifolio.image.files[0];
    const {name, size, type} = file;
    const ref = storage.ref(name);

    ref.put(file).then(data_push => {
      data_push.ref.getDownloadURL().then(downloadURL => {
        const newPortifolio = {
          title: itemPortifolio.title,
          description: itemPortifolio.description,
          image: downloadURL
        }
        config.push('portfolio', {
          data: newPortifolio
        });
        this.setState({isRecording:false});
      });
    });

    event.preventDefault();
  }

  render(){
    if(this.state.isRecording){
      return (
      <div className = 'container'>
        <p><span className='glyphicon glyphicon-refresh'/></p>
      </div>
      );
    }

		return(
      <div className = "container">
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

          <button type='submit' className='btn btn-success btn-lg'>Send</button>
          
        </form>
      </div>
		);
	}
}

export default AdminPortfolio;