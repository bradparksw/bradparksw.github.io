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
      <header className="header">
        <div className="overlay">
          <div className="container-fluid home-container">
            <div className="row">
              <div className="col-sm-7 intro">
                <h1> Hey! My name is 
                  <span> </span>
                  <span className="mobile-br"><br></br></span> 
                  <span class="name nowrap">
                    <span>B</span>
                    <span>R</span>
                    <span>A</span>
                    <span>D</span>
                  </span>
                </h1>
                <h1> I'm a <span id="swe">Software Engineer</span></h1>
              </div>
              <div className="col-sm-3">

              </div>
            </div>
          </div>
          <div className="container-xl connect-container">  
           <div className="row connect">
              <div className="col-m-1 socials">
                <button onClick={openLinkedin} class="btn btn-outline-info">
                  <i className="fab fa-linkedin" /> Linkedin
                </button>
              </div>
              <div className="col-m-1 socials">
                <button onClick={openGithub} type="button" class="btn btn-outline-dark">
                  <i className="fab fa-github" /> Github
                </button>
              </div> 
              <div className="col-m-1 socials">
                <button onClick={openResume} type="button" class="btn btn-outline-warning">
                  <i className="far fa-file" /> Resume
                </button>
              </div> 
              <div className="col-m-1 socials">
                <button onClick={openEmail} type="button" class="btn btn-outline-success">
                  <i className="far fa-envelope" /> Email
                </button>
              </div> 
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Home;
