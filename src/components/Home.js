import React, {useEffect} from 'react';
import $ from 'jquery'
import '../Home.css';

function openLinkedin() {
  window.open('https://www.linkedin.com/in/bradparksw/');
}

function openGithub() {
  window.open('https://www.github.com/bradparksw/');
}

function openEmail() {
  window.open('mailto:bradparksw@gmail.com');
}

function openResume() {
  window.open('/resume.pdf');
}

function Home() {
  useEffect(() => {
    $('.header').height($(window).height());

    const spans = document.querySelectorAll('.name span');

    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });
      
      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx+1))
    });

  });

  return (
    <section id="home">
        <div className="overlay">
          <div className="container-fluid home-container">
            <div className="row fullscreen d-flex align-items-center">
              <div className="banner-content col-lg-5 col-md-12 justify-content-center intro">
                <h6> <span id="greeting">Hey! My name is</span> 
                  <br></br>
                  <br></br>

                  <span> </span>
                  <span className="mobile-br"><br></br></span> 
                  <span class="name nowrap">
                    <span>B</span>
                    <span>R</span>
                    <span>A</span>
                    <span>D</span>
                    <span>&nbsp;</span>
                    <span>P</span>
                    <span>A</span>
                    <span>R</span>
                    <span>K</span>
                  </span>
                </h6>
                <h1 id="swe">Software Engineer</h1>
                <div className="col-lg-8 col-md-7 col-xl-9 description">
                  <p>Welcome to my website! I'm a 3<sup>rd</sup>  year student studying computer science at the University of Waterloo. I'm currently seeking a 4 month internship for Winter 2021. Connect with me to chat about literally anything!</p>
                </div>

                <button onClick={openLinkedin} class="btn btn-outline-info socials">
                  <i className="fab fa-linkedin" /> Linkedin
                </button>

                <button onClick={openGithub} type="button" class="btn btn-outline-dark socials">
                  <i className="fab fa-github" /> Github
                </button>

                <button onClick={openEmail} type="button" class="btn btn-outline-success socials">
                  <i className="far fa-envelope" /> Email
                </button>

                <button onClick={openResume} type="button" class="btn btn-outline-secondary socials">
                  <i className="far fa-file" /> Resume
                </button>
              </div>
              <div className="banner-img col-lg-4 col-md-4">
                <img id="developer" src="/images/dev.png" alt="developer"></img>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home;
