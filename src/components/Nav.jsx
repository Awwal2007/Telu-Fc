import React from 'react'
import logo from "../assets/telu logo.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </div>
        <div className="nav-bars">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="">About</Link> </li>
                <li> <Link to="">Players</Link></li>
                <li><Link to="">Gallery</Link></li>
                <li><Link to="">News</Link></li>
                <li><Link to="">Contact Us</Link></li>
            </ul>
            <div className="our-academy">
                <a to="">Our Academy</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav