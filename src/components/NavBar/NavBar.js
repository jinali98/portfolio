import { Link } from "gatsby"
import React, { useState } from "react"
import { FiAlignJustify } from "react-icons/fi"
import "./NavBar.css"
const NavBar = () => {
  const [show, setShow] = useState(false)

  const closeTheNavigation = () => {
    setShow(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={closeTheNavigation}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={closeTheNavigation}
          >
            About
          </Link>

          <Link
            to="/projects"
            className="nav-link"
            activeClassName="active-link"
            onClick={closeTheNavigation}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
