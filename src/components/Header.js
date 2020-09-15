import React, {Component} from 'react';
import '../header.css'

function openResume() {
  window.open('/resume.pdf');
}

class Header extends Component {
  

  render() {
    return (
      <nav className="navbar transparent navbar-inverse navbar-expand-md fixed-top" style={{padding: '1rem 2rem 1rem 2rem'}}>
        <a className="navbar-brand" href="/#header">B</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fa fa-navicon" style={{color:'#fff', fontSize:'28px'}}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ol className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link" href="/#about">About Me</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/#experience">Experience</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/#skills">Skills</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/#projects">Projects</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/#contact">Contact Me</a>
              </li>
          </ol>
          <button onClick={openResume} className="btn btn-outline-success my-2 my-sm-0 resume" type="button">Resume</button>
        </div>
      </nav>
    )
  }
}

export default Header;
