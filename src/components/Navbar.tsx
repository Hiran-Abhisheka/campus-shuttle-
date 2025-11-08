import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <Link to="/" className="nav-logo">
        LOGO
      </Link>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-link home">Home</Link>
          <Link to="/about" className="nav-link about">About</Link>
          <Link to="/contact" className="nav-link contact">Contact</Link>
          <Link to="/download" className="nav-link download">Download</Link>
          <Link to="/login" className="nav-button">Login</Link>
        </div>
      </nav>
    </>
  );
}