import React, {useEffect} from 'react';
import '../experience.css';
import Separator from './Separator'

function Experience() {
  return (
    <section id="experience">
      <Separator />
      <div class="container-fluid">
        <h1 class="section-title">Work Experience</h1>
        <br />
        <br />
        <div class="timeline">
          <div class="container-fluid">
            <img class="rounded-circle" src="/images/listacross.png" class="company-img listacross" alt="listacross"></img>
            <div class="box right">
              <div class="content">
                <img class="rounded-circle" src="/images/listacross.png" class="inline-company-img listacross" alt="listacross"></img>
                <h4>ListAcross</h4>
                <h4>Backend Engineer Intern | 2020 May. - Aug. </h4>
                <ul>
                  <li>Built a RESTful API for inventory management and OAuth authentication</li>
                  <li>Implemented a proprietary automation system for inventory auto-posting on Facebook Marketplace, and assisted in Android development to extend service to OfferUp and LetGo</li>
                  <li>Developed inventory scrapers to automatically import customer inventory into the database, accelerating time-to-live by 14X</li>
                </ul>
                <br />
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <img class="rounded-circle" src="/images/edisoft.png" class="company-img edisoft" alt="edisoft"></img>
            <div class="box right">
              <div class="content">
                <img class="rounded-circle" src="/images/edisoft.png" class="edisoft inline-company-img" alt="edisoft"></img>
              <h4>Edisoft</h4>
              <h4>Software Developer Intern | 2020 May. - Aug. </h4>
              <ul>
                <li>Developed merchant facing web application to automate business transactions (EDI) to the merchant's ERP, improving overall SaaS workflow</li>
                <li>Optimized connecting user's Shopify account to their ERP by automating order fulfillment and inventory updates</li>
              </ul>
              <br />
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <img class="rounded-circle" src="/images/fgfbrands.png" class="company-img fgfbrands" alt="fgfbrands"></img>
            <div class="box right">
              <div class="content">
                <img class="rounded-circle" src="/images/fgfbrands.png" class="inline-company-img fgfbrands" alt="fgfbrands"></img>
              <h4>FGF Brands</h4>
              <h4>Full Stack Developer Intern | 2019 May. - Aug. </h4>
              <ul>
                <li>Accelerated client's order management efficiency by developing a vendor management web portal on Azure, effectively increasing speed by 70%</li>
                <li>Implemented live barcode scanners on web apps and to internal library, reducing product report completion time by 35%</li>
              </ul>
              <br />
              </div>
            </div>
          </div>
          <div class="container-fluid">
          <img class="rounded-circle" src="/images/uw_robotics.png" class="company-img robotics" alt="robotics"></img>
            <div class="box right">
              <div class="content">
              <img class="rounded-circle" src="/images/uw_robotics.png" class="inline-company-img robotics" alt="robotics"></img>
              <h4>Waterloo Robotics Software Team</h4>
              <h4>Software Engineer | 2020 May. - Aug. </h4>
              <ul>
                  <li>Developed software for Mars rover to compete at University Rover Challenge</li>
                  <li>Created an Xbox controller live visualization to use as the vehicle's control interface using ROS Joy to receive/update state of the controller</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
