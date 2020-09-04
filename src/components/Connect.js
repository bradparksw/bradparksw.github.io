import React, {Component} from 'react';
import '../connect.css';

class Connect extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
      document.getElementById('shareIcon').classList.toggle('fa-share-alt');
      document.getElementById('shareIcon').classList.toggle('fa-plus');
      document.getElementById('circularMenu').classList.toggle('active');
    }


    return (
      <div id="circularMenu" className="circular-menu active">
        <a href="/#" className="floating-btn" onClick={handleClick}>
          <i id="shareIcon" className="fa fa-plus"></i>
        </a>
        <menu className="items-wrapper">
          <a href="https://www.github.com/bradparksw/" className="menu-item fa fa-github"></a>
          <a href="/#" className="menu-item fa fa-envelope"></a>
          <a href="/#" className="menu-item fa fa-file"></a>
          <a href="/#" className="menu-item fa fa-linkedin"></a>
        </menu>
      </div>
    )
  }
}

export default Connect;
