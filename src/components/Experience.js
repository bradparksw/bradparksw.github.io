import React from 'react';
import '../experience.css';
import Separator from './Separator'

function Experience() {
  return (
    <section id="experience">
      <Separator />
      <div className="container-fluid">
        <h1 className="section-title">Work Experience</h1>
        <br />
        <br />
        <div className="timeline">
          <div className="container-fluid">
            <img src="/images/listacross.png" className="company-img listacross" alt="listacross" />
            <div className="box right">
              <div className="content">
                <img src="/images/listacross.png" className="inline-company-img listacross" alt="listacross"></img>
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
          <div className="container-fluid">
            <img src="/images/edisoft.png" className="company-img edisoft" alt="edisoft"></img>
            <div className="box right">
              <div className="content">
                <img src="/images/edisoft.png" className="edisoft inline-company-img" alt="edisoft"></img>
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
          <div className="container-fluid">
            <img src="/images/fgfbrands.png" className="company-img fgfbrands" alt="fgfbrands"></img>
            <div className="box right">
              <div className="content">
                <img src="/images/fgfbrands.png" className="inline-company-img fgfbrands" alt="fgfbrands"></img>
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
          <div className="container-fluid">
          <img src="/images/uw_robotics.png" className="company-img robotics" alt="robotics"></img>
            <div className="box right">
              <div className="content">
              <img src="/images/uw_robotics.png" className="inline-company-img robotics" alt="robotics"></img>
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
