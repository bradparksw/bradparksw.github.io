import React, {Component} from 'react';
import './App.css';

import Home from './components/Home'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Separator from './components/Separator'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        
      <Separator />
        <Experience />
        <Skills />
        <Projects />
        <Contact />

      </div>
    )
  }
}

export default App;
