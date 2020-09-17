import React from 'react';
import '../projects.css';
import Separator from './Separator'

function Projects() {
  return (
    <section id="projects">
      <Separator />
      <h1 className="section-title">Projects</h1>
      <br />
      <br />
      <div className="container-xl">
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="/images/stylistai.jpg" alt="Card" />
            <div class="card-body">
              <h5 class="card-title">stylist.ai</h5>
              <h6 class="card-subtitle mb-2 text-muted">Android App</h6>
              <p class="card-text">stylist.ai is an fashion app that personalizes outfits based on the user's actual wardrobe, today's weather, and previous selections. It was trained in a neural network with a popular clothing database and user's feedback of previous selections over time.</p>
              <p class="card-text"><small class="text-muted">Django, MySQL, Tensorflow, Google Cloud Platform, Python, Java</small></p>
              <p class="card-text"><small><a href="https://github.com/bradparksw/stylist.ai">Github</a></small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/images/reddit.png" alt="Card" />
            <div class="card-body">
              <h5 class="card-title">Reddit Cyberbullying Detection Bot</h5>
              <h6 class="card-subtitle mb-2 text-muted">Android App</h6>
              <p class="card-text">As the reddit community can be very hostile against each other in specific subreddits, this bot scans Reddit comments to detect cyberbullying based on combinations of hate words trained in a neural network. The next step to this project would be to report such comments automatically.</p>
              <p class="card-text"><small class="text-muted">Python, Scikit-learn, NLTK, NumPy, pickle, Pandas, PRAW</small></p>
              <p class="card-text"><small><a href="https://github.com/bradparksw/Reddit-Cyberbullying-Detection-Bot">Github</a></small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/images/ocr.png" alt="Card" />
            <div class="card-body">
              <h5 class="card-title">OCR Word Search Solver</h5>
              <p class="card-text">Developed an algorithm to solve word search by translating game image to text using Tesseract-OCR and visualizing solution using Python Tkinter</p>
              <p class="card-text"><small class="text-muted">Python, Tesseract-OCR, Pillow, Tkinter</small></p>
              <p class="card-text"><small><a href="https://github.com/bradparksw/OCR-Word-Search-Solver">Github</a></small></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="/images/website.PNG" alt="Card" />
            <div class="card-body">
              <h5 class="card-title">Personal Website</h5>
              <p class="card-text">This is the website you are currently looking at built with React!</p>
              <p class="card-text"><small class="text-muted">React, HTML/CSS, JavaScript, Bootstrap, jQuery</small></p>
              <p class="card-text"><small><a href="https://github.com/bradparksw/bradparksw.github.io">Github</a></small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/images/instagram.png" alt="Card" />
            <div class="card-body">
              <h5 class="card-title">Instagram Web Analytics</h5>
              <p class="card-text">A web app that allows user to view analytics of their account, or other public account, without saving any data.</p>
              <p class="card-text"><small class="text-muted">Express.js, React, Node.js, AWS</small></p>
              <p class="card-text"><small><a href="https://google.ca">Currenttly in Progress</a></small></p>
            </div>
          </div>
          <div class="card" style={{visibility: "none", border: "none" }}>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
