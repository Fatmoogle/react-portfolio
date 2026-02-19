import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    // Professional Backend Projects
    {
      id: 1,
      title: "Wheatland TOS API",
      description: "Rebuilt a legacy .NET/C++ application into a modernized REST API for Illinois title orders and invoicing workflows. Deployed on company's private servers with CI/CD pipeline.",
      image: null, // Text card
      isBackend: true,
      technologies: ["NestJS", "TypeScript", "TypeORM", "SQL Server", "Apache NiFi", "DeployHQ", ".NET", "REST API"],
      github: null, // Private company project
      demo: null,
      role: "Lead Backend Developer"
    },
    {
      id: 2,
      title: "Loss Report Extractor",
      description: "Automated cron job application that extracts text from PDF loss reports, generates CSV files, and sends bi-monthly email reports. Deployed on Google App Engine.",
      image: null, // Text card
      isBackend: true,
      technologies: ["Node.js", "Puppeteer", "Gmail API", "PDF Parsing", "Google App Engine", "Cron Jobs"],
      github: null, // Private project
      demo: null,
      role: "Backend Developer"
    },
    {
      id: 3,
      title: "Diversified National-Qualia Bot",
      description: "Headless Playwright application that runs every 15 minutes to scrape client portal for documents and forward them to external API for processing.",
      image: null, // Text card
      isBackend: true,
      technologies: ["Playwright", "TypeScript", "Google App Engine", "REST API", "Web Scraping", "Automation"],
      github: null, // Private project
      demo: null,
      role: "Backend Developer"
    },
    // Bootcamp Projects
    {
      id: 4,
      title: "DBUGME",
      description: "Social application where you connect with others as a student or as a mentor and share your knowledge!",
      image: "../Assets/Images/DBUGME_pic.PNG",
      logo: "../Assets/Images/debugmelogo.png",
      technologies: ["React", "JavaScript", "MongoDB", "Mongoose", "Express", "Node.js", "Cloudinary"],
      github: "https://github.com/jesseodonoghue/project-3",
      demo: "https://dbugme.herokuapp.com"
    },
    {
      id: 5,
      title: "PetsLuv",
      description: "A gallery app for pets using React and Redux. Allows users to click and download any or all images!",
      image: "../Assets/Images/PetsLuvAppImg.PNG",
      logo: "../Assets/Images/PetsLuv.PNG",
      technologies: ["React", "Redux", "JavaScript", "Material UI", "Styled Components", "Node.js", "Axios"],
      github: "https://github.com/Fatmoogle/eulerity_app",
      demo: "https://petsluv.herokuapp.com/"
    },
    {
      id: 6,
      title: "Custom RGB Lightscript",
      description: "A Perlin Noise inspired custom lightscript designed for SignalRGB to light up your RGB devices. Created using HTML Canvas and SignalRGB Engine.",
      image: "../Assets/Images/RGBCustomScript.png",
      logo: "../Assets/Images/SRGB_CustomScript.png",
      technologies: ["HTML Canvas", "JavaScript", "SignalRGB", "Animation"],
      github: "https://github.com/Fatmoogle/SignalRGB_CustomScript",
      video: "https://www.youtube.com/embed/lwBYb05a0cg",
      demo: null
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-header fade-in">
          <h1>My Projects</h1>
          <p>Professional backend services and full-stack applications</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.isBackend ? 'backend-card' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              {project.isBackend ? (
                // Backend text card
                <div className="backend-card-content">
                  <div className="backend-badge">Backend Service</div>
                  <h3>{project.title}</h3>
                  {project.role && <p className="role">{project.role}</p>}
                  <div className="tech-preview">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-pill more">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              ) : (
                // Regular project card with image
                <>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span>View Details</span>
                    </div>
                  </div>
                  <div className="project-content">
                    {project.logo ? (
                      <img src={project.logo} alt={project.title} className="project-logo" />
                    ) : (
                      <h3>{project.title}</h3>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            {selectedProject.isBackend && (
              <div className="backend-badge-large">Backend Service</div>
            )}

            <h2>{selectedProject.title}</h2>

            {selectedProject.role && (
              <p className="modal-role"><strong>Role:</strong> {selectedProject.role}</p>
            )}

            {selectedProject.video && (
              <div className="modal-video">
                <iframe
                  src={selectedProject.video}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <p className="modal-description">{selectedProject.description}</p>

            <div className="modal-buttons">
              {selectedProject.github ? (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  GitHub
                </a>
              ) : (
                <button className="btn btn-disabled" disabled>
                  Private Repository
                </button>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              )}
            </div>

            <div className="modal-technologies">
              <h3>Technologies</h3>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
