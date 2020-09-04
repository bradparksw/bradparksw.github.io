import React, {Component} from 'react';
import './App.css';

import Particles from 'react-particles-js';
import Home from './components/Home'
import Connect from './components/Connect'
import Header from './components/Header'

//import MainContent from './components/MainContent'

const params = {
  "particles": {
      "number": {
          "value": 6,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "speed": 2,
          "out_mode": "out"
      },
      "shape": {
          "type": [
              "image",
          ],
          "image": [
              {
                  "src": "/images/react.svg",
                  "height": 25,
                  "width": 25
              },
              {
                "src": "/images/node.svg",
                "height": 20,
                "width": 32.6
              },
              {
                "src": "/images/c_sharp.svg",
                "height": 25,
                "width": 25
              }

          ]
      },
      "color": {
          "value": "#CCC"
      },
      "size": {
          "value": 30,
          "random": false,
          "anim": {
              "enable": true,
              "speed": 4,
              "size_min": 10,
              "sync": false
          }
      }
  },
  "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "bubble"
        },
        "onclick": {
            "enable": true,
            "mode": "repulse"
        }
    },
    "modes": {
        "bubble": {
            "distance": 250,
            "duration": 2,
            "size": 1,
            "opacity": 1
        },
        "repulse": {
            "distance": 300,
            "duration": 2
        }
    }
  },
  "retina_detect": false
}


class App extends Component {
  render() {
    return (
      <div className="App" style={{
          backgroundColor: '#222629',
          width: '100vw',
          height: '100vh'
        }}>
        {/* <Particles
          canvasClassName="particles"
          params={params} />  */}
        <Header />
        <Home />
        <Connect />
      </div>
    )
  }
}

export default App;
