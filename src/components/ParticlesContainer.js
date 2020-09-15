import React, {Component} from 'react';
import Particles from 'react-particles-js';
import '../particles.css';

class ParticlesContainer extends Component {
    render() {
        return ( 
            <Particles canvasClassName="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} 
            />
        )
    }
}

export default ParticlesContainer;