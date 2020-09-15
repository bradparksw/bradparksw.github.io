import React, {Component} from 'react';
import './App.css';

import Home from './components/Home'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        backgroundColor: "linear-gradient(#a1c4fd, #c2e9fb);"
      }}>
        <Header />
        <Home />
      </div>
    )
  }
}

export default App;
