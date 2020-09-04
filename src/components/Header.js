import React, {Component} from 'react';
import '../header.css'

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md fixed-top" style={{backgroundColor:'#222629', padding: '1rem 2rem 1rem 2rem'}}>
        <a class="navbar-brand" href="/#">Fixed navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ol class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="/#about">About Me</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/#experience">Experience</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/#skills">Skills</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/#projects">Projects</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/#contact">Contact Me</a>
                  </li>
              </ol>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
