import React, { Component } from 'react';

import Site from './Site'

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Services/>
        <Site/>
        <Footer/>
      </div>
    );
  }
}

export default App;
