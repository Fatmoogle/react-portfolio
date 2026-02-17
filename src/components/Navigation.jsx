import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          AV
        </NavLink>
        
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
