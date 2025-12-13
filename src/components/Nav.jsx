import React, { useState } from 'react'
import logo from "../assets/telu logo.png"
import { Link } from 'react-router-dom'

import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";


const Nav = () => {
    const [open, setOpen] = useState(false)

    const toggleNavLinks = ()=>{
        open === false ?  setOpen(true) : setOpen(false)
    }

  return (
    <nav>
        <div className="logo">
            <Link to="/">
                <img loading='lazy' src={logo} alt="logo" />
            </Link>
        </div>
        <div className="nav-bars">
            <ul className={open ? "" : "d-none"}>
                <div onClick={toggleNavLinks} className='closeBtn'>
                    <GrClose/>
                </div>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="">Players</Link></li>
                <li><Link to="">Gallery</Link></li>
                <li><Link to="">News</Link></li>
                <li><Link to="">Contact Us</Link></li>
            </ul>
            <div className="our-academy">
                <a to="">Our Academy</a>
            </div>
        </div>
        <div onClick={toggleNavLinks} className='arm-burger'>
            <IoMenu />
        </div>
    </nav>
  )
}

export default Nav