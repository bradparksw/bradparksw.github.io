import React, {Component} from 'react';
import './App.css';

import Home from './components/Home'
import Header from './components/Header'
import Skills from './components/Skills'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />

      </div>
    )
  }
}

export default App;
