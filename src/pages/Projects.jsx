import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Custom RGB Lightscript",
      description: "A Perlin Noise inspired custom lightscript designed for SignalRGB to light up your RGB devices. Created using HTML Canvas and SignalRGB Engine.",
      image: "../Assets/Images/RGBCustomScript.png",
      logo: "../Assets/Images/SRGB_CustomScript.png",
      technologies: ["HTML", "HTML Canvas", "CSS", "JavaScript", "SignalRGB"],
      github: "https://github.com/Fatmoogle/SignalRGB_CustomScript",
      video: "https://www.youtube.com/embed/lwBYb05a0cg",
      demo: null
    },
    {
      id: 2,
      title: "PetsLuv",
      description: "A gallery app for pets using React and Redux. Allows users to click and download any or all images!",
      image: "../Assets/Images/PetsLuvAppImg.PNG",
      logo: "../Assets/Images/PetsLuv.PNG",
      technologies: ["React", "Redux", "JavaScript", "HTML5", "CSS3", "Material UI", "Styled Components", "Node.js", "Axios"],
      github: "https://github.com/Fatmoogle/eulerity_app",
      demo: "https://petsluv.herokuapp.com/"
    },
    {
      id: 3,
      title: "DBUGME",
      description: "Social application where you connect with others as a student or as a mentor and share your knowledge!",
      image: "../Assets/Images/DBUGME_pic.PNG",
      logo: "../Assets/Images/debugmelogo.png",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "React Spring", "Bootstrap", "MongoDB", "Mongoose", "Express", "Node.js", "Axios", "Cloudinary"],
      github: "https://github.com/jesseodonoghue/project-3",
      demo: "https://dbugme.herokuapp.com"
    },
    {
      id: 4,
      title: "Coding Quiz!",
      description: "Fun and silly game created using JavaScript to test your knowledge on basic coding ideas.",
      image: "../Assets/Images/CodingQuiz.png",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Fatmoogle/Coding-Quiz",
      demo: "https://fatmoogle.github.io/Coding-Quiz/"
    },
    {
      id: 5,
      title: "Dinner Dice",
      description: "A mobile friendly application created to generate random recipes for drinks and food using two API's.",
      image: "../Assets/Images/DinnerDice.png",
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery", "2 Public APIs"],
      github: "https://github.com/victoriagfield/Dinner_Dice",
      demo: "https://victoriagfield.github.io/Dinner_Dice/"
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Weather application that allows user to search for the current and 5 day forecast of a city.",
      image: "../Assets/Images/WeatherDashboard.png",
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery", "OpenWeatherMap API"],
      github: "https://github.com/Fatmoogle/Weather-Dashboard",
      demo: "https://fatmoogle.github.io/Weather-Dashboard/"
    },
    {
      id: 7,
      title: "Employee Directory",
      description: "Basic React Application that displays non-sensitive employee information with search functionality.",
      image: "../Assets/Images/Emp.Dir.PNG",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "RandomUser API"],
      github: "https://github.com/Fatmoogle/Employee_Directory",
      demo: "https://fatmoogle.github.io/Employee_Directory/"
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
          <p>A collection of web applications and tools I've built</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
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
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <h2>{selectedProject.title}</h2>
            
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
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                GitHub
              </a>
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
