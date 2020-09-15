import React, {Component, useEffect} from 'react';
import $ from 'jquery'
import '../Home.css';

function Home() {
  useEffect(() => {
    $('.header').height($(window).height());
  });

  return (
    <header className="header">
      <div className="overlay">
        <div className="container">
          <div className="intro">
            <h1> Hello, My Name is Brad Park</h1>
            <h1> I'm a Software Engineer</h1>
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Home;
