import React from 'react';
import '../skills.css';
import Separator from './Separator'

function Skills() {

  return (
    <section id="skills">
      <Separator />
      <h1 className="section-title">Skills</h1>
      <br />
      <br />
      <div className="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Languages</h5>
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="small-cell">Experienced</th>
                      <th scope="col"></th>
                      <th scope="col" className="small-cell">Proficient</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="small-cell"><i className="devicon-csharp-plain"/></td>
                      <td className="skills">C#</td>
                      <td className="small-cell"><i className="devicon-python-plain"/></td>
                      <td className="skills">Python</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="devicon-javascript-plain"/></td>
                      <td className="skills">JavaScript</td>
                      <td className="small-cell"><i className="devicon-c-plain"/></td>
                      <td className="skills">C</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="devicon-cplusplus-plain"/></td>
                      <td className="skills"> C++</td>
                      <td className="small-cell"><i className="devicon-java-plain"/></td>
                      <td className="skills">Java</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="devicon-html5-plain"/></td>
                      <td className="skills">HTML</td>
                      <td className="small-cell">&nbsp;&nbsp;<i className="fas fa-dollar-sign"/></td>
                      <td className="skills">Bash</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="devicon-css3-plain"/></td>
                      <td className="skills">CSS</td>
                      <td className="small-cell"><i className="fab fa-r-project"/></td>
                      <td className="skills">R</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="fas fa-database"/></td>
                      <td className="skills">SQL</td>
                    </tr>
                    <tr style={{visibility: "hidden"}}>
                      <td className="small-cell"><i className="fab fa-etsy"/></td>
                      <td className="skills">Entity Framework</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card skill-card">
              <div class="card-body">
                <h5 class="card-title">Frameworks & Tools</h5>
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="small-cell">Experienced</th>
                      <th scope="col"></th>
                      <th scope="col" className="small-cell">Proficient</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="small-cell"><i className="devicon-mongodb-plain"/></td>
                      <td className="skills">MongoDB</td>
                      <td className="small-cell"><i className="fab fa-asymmetrik"/></td>
                      <td className="skills">Azure</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="devicon-express-original"/></td>
                      <td className="skills">Express</td>
                      <td className="small-cell"><i className="devicon-jquery-plain"/></td>
                      <td className="skills">jQuery</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="devicon-react-plain"/></td>
                      <td className="skills">React</td>
                      <td className="small-cell"><i className="devicon-bootstrap-plain"/></td>
                      <td className="skills">Bootstrap</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="devicon-nodejs-plain"/></td>
                      <td className="skills">Node.js</td>
                      <td className="small-cell"><i className="fas fa-tenge"/></td>
                      <td className="skills">Tensorflow</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="devicon-dot-net-plain"/></td>
                      <td className="skills">.NET</td>
                      <td className="small-cell"><i className="fab fa-servicestack"/></td>
                      <td className="skills">Selenium</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="fab fa-etsy"/></td>
                      <td className="skills">Entity Framework</td>
                    </tr>
                    <tr>
                      <td className="small-cell"><i className="fas fa-server"/></td>
                      <td className="skills">SQL Server</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
