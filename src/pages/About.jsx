import { useState } from 'react'
import './About.css'

function About() {
  const [mainImage, setMainImage] = useState('/Assets/Images/Profile_pic.jpg')

  return (
    <div className="about">
      <div className="container">
        <div className="about-header fade-in">
          <h1>About Me</h1>
          <p className="about-intro">
            Backend-Focused Full Stack Developer
          </p>
        </div>

        <div className="about-layout">
          {/* Left Side - Pictures */}
          <div className="about-pictures slide-in-left">
            <div className="main-picture">
              <img src={mainImage} alt="Alex Varela" />
            </div>
            <div className="picture-thumbnails">
              <div 
                className="thumbnail"
                onMouseEnter={() => setMainImage('/Assets/Images/Profile_pic.jpg')}
              >
                <img src="/Assets/Images/Profile_pic.jpg" alt="Profile 1" />
              </div>
              <div 
                className="thumbnail"
                onMouseEnter={() => setMainImage('/Assets/Images/profil_pic2.jpg')}
              >
                <img src="/Assets/Images/profil_pic2.jpg" alt="Profile 2" />
              </div>
              <div 
                className="thumbnail"
                onMouseEnter={() => setMainImage('/Assets/Images/profile_pic3.jpg')}
              >
                <img src="/Assets/Images/profile_pic3.jpg" alt="Profile 3" />
              </div>
              <div 
                className="thumbnail"
                onMouseEnter={() => setMainImage('/Assets/Images/profile_pic4.jpg')}
              >
                <img src="/Assets/Images/profile_pic4.jpg" alt="Profile 4" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content">
            {/* Welcome Section */}
            <div className="welcome-section fade-in">
              <h2>Welcome</h2>
              <p>
                I am a recent graduate of the University of North Carolina at Chapel Hill 
                with newly honed skills in <strong>JavaScript, React, HTML and CSS, and more</strong>. 
                I'm passionate about creating elegant, efficient solutions to complex problems 
                and building web applications that make a difference.
              </p>
              <p>
                My journey into web development started with a fascination for how things work 
                behind the scenes. I love the challenge of turning ideas into reality through code, 
                and I'm constantly learning new technologies and best practices to improve my craft.
              </p>
            </div>

            {/* Education and Skills Row */}
            <div className="info-row">
              {/* Education Section */}
              <div className="education-section">
                <h3>Education</h3>
                <div className="education-list">
                  <div className="education-item">
                    <div className="education-logo">
                      <img src="/Assets/Images/WCU.png" alt="Western Carolina University" />
                    </div>
                    <div className="education-info">
                      <h4>Western Carolina University</h4>
                      <p>Undergraduate Studies</p>
                    </div>
                  </div>
                  <div className="education-item">
                    <div className="education-logo">
                      <img src="/Assets/Images/UNC.png" alt="University of North Carolina" />
                    </div>
                    <div className="education-info">
                      <h4>UNC Chapel Hill</h4>
                      <p>Full Stack Web Development Bootcamp</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills Section */}
              <div className="skills-section">
                <h3>Technical Skills</h3>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h4>Frontend</h4>
                    <ul>
                      <li>React</li>
                      <li>JavaScript (ES6+)</li>
                      <li>HTML5 & CSS3</li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Backend</h4>
                    <ul>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                      <li>RESTful APIs</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Tools</h4>
                    <ul>
                      <li>Git & GitHub</li>
                      <li>VS Code</li>
                      <li>Chrome DevTools</li>
                      <li>Postman</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="interests-section">
              <h3>Interests</h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-icon">💻</span>
                  <span>Coding</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🎮</span>
                  <span>Gaming</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🥁</span>
                  <span>Drums</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About