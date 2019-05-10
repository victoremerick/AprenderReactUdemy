import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import photo from './logo.svg';
import { tsConstructorType } from '@babel/types';

class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Aprendendo React
          </p>
          <p>User</p>
          <User name="Victor" photo={photo}></User>
        </header>
      </div>
    );
  }
}

export default App;
