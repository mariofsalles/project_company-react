import React, { Component } from 'react';

import Site from './Site'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Site/>
        <Footer/>
      </div>
    );
  }
}

export default App;
