import React, {Component} from 'react';
import '../Home.css';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div id="intro">
          Hello! I'm <span id="name">Brad Park</span>.{"\n"}
          Welcome to my website!
        </div>
        
      </div>
    )
  }
}

export default Home;
