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
              <p class="card-text">Created an Android app that personalizes outfits by building a deep learning model based on user's wardrobe, trained with popular outfit database and user's preference from previous selections.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <p class="card-text"><small><a href="https://google.ca">Github</a></small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/images/reddit.png" alt="Card" />
            <div class="card-body">
              <h5 class="card-title">Redidt Cyberbullying Detection Bot</h5>
              <p class="card-text">Scanned Reddit comments using PRAW API wrapper and trained data using custom vectorizer and applied Scikit-learn to predict and detect cyberbullying.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <p class="card-text"><small><a href="https://google.ca">Github</a></small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="/images/ocr.jpg" alt="Card" />
            <div class="card-body">
              <h5 class="card-title">OCR Word Search Solver</h5>
              <p class="card-text">Developed an algorithm to solve word search by translating game image to text using Tesseract-OCR and visualizing solution using Python Tkinter</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <p class="card-text"><small><a href="https://google.ca">Github</a></small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
