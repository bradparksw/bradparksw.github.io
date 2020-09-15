import React, {useEffect} from 'react';
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
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Home;
