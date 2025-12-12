import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
        <Nav/>
        <div className="hero">
            <h1>Telu Football Club</h1>
            <p>Telu Football Club is a top rated professional football club, based in Osun, Nigeria which has featured in various football tournaments. It’s Registered with the Nigeria F.A and the Corporate Affairs Commission</p>
            <button>
                Join Us
            </button>
        </div>        
    </header> 
  )
}

export default Header