import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React TIC-TAC-TOE </h1>
        </header>
        {/* <p className="App-introbe">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className="cuadricula">
          <div className="cuadradoA"></div>
          <div className="cuadradoB"></div>
          <div className="cuadradoC"></div>
          <div className="cuadradoA"></div>
          <div className="cuadradoB"></div>
          <div className="cuadradoC"></div>
          <div className="cuadradoD"></div>
          <div className="cuadradoE"></div>
          <div className="cuadradoF"></div>
        </div>
      </div>
    );
  }
}

export default App;
