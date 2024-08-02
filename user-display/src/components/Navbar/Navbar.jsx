import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({onLogout}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/home">Friends List</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link onClick={onLogout} to="/">Logout</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar