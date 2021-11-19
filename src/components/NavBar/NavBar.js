import { Link } from "gatsby"
import React from "react"
import { FiAlignJustify } from "react-icons/fi"
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>

          <Link
            to="/projects"
            className="nav-link"
            activeClassName="active-link"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
