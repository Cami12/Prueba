import React, { Component } from 'react';
import './App.css';
import Padre from './components/padre/padre.js';
import Hijo from './components/hijo/hijo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Padre/>
      </div>
    );
  }
}

export default App;
