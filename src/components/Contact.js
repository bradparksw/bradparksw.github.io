// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import Separator from './Separator'
import '../contact.css'

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section id="contact">
        <Separator />
        <h1 className="section-title">Skills</h1>
        <br />
        <br />
        <div class="container-xl">
        <div class="row justify-content-md-center">
        <div class="card col-md-6">

          <h5 class="card-header white-text text-center py-4" style={{color: "black", backgroundColor: "#adbcd6"}}>
            <strong>Let's Chat!</strong>
          </h5>

          <div class="card-body px-lg-5 pt-0">
            <form class="text-center" style={{color: "#adbcd6;"}} onSubmit={this.submitForm}
          action="https://formspree.io/myybgpoy"
          method="POST">

              <div class="md-form mt-3">
                <input type="text" name="name" id="materialContactFormName" class="form-control" placeholder="Your Name *"/>
              </div>
              <br />

              <div class="md-form">
                  <input type="email" name="email" id="materialContactFormEmail" class="form-control" placeholder="Your Email *"/>
              </div>
              <br />
              <div class="md-form">
                <textarea id="materialContactFormMessage" name="message" class="form-control md-textarea" rows="3" placeholder="Leave a message *"></textarea>
              </div>
              <br />
              {status === "SUCCESS" ? <strong id="thank">Thanks! I'll get back to you ASAP :)</strong> : 
              <button class="btn btn-outline-secondary btn-rounded " type="submit">Send</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
        </div>
        </div>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}