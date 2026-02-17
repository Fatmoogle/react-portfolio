import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-content fade-in">
                    <h1 className="home-title">
                        Hi, I'm <span className="highlight">Alex Varela</span>
                    </h1>
                    <h2 className="home-subtitle">Full Stack Web Developer</h2>
                    <p className="home-description">
                        Experienced backend developer specializing in Node.js, databases, and API design. Leveraging 4+ years of server-side experience to build robust full-stack applications.
                    </p>
                    <div className="home-skills">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Nest.js</span>
                        <span className="skill-tag">SQL Server</span>
                        <span className="skill-tag">HTML/CSS</span>
                        <span className="skill-tag">Express</span>
                        <span className="skill-tag">C#</span>
                        <span className="skill-tag">dotnet</span>
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">AI Assistance</span>

                    </div>
                    <div className="home-cta">
                        <Link to="/projects" className="btn btn-primary">
                            View My Work
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Get In Touch
                        </Link>
                    </div>
                </div>
                <div className="home-visual">
                    <img src="/Assets/Images/Elgoomtaf2.png" alt="Alex Varela" className="profile-image" />
                    <div className="visual-circle"></div>
                    <div className="visual-square"></div>
                    <div className="visual-triangle"></div>
                </div>
            </div>
        </div>
    )
}

export default Home