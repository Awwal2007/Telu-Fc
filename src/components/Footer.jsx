import React from 'react'

import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SlSocialYoutube } from "react-icons/sl";
import logo from "../assets/telu logo.png"

const Footer = () => {
  return (
    <footer>
        <div className='footer-contents'>
            <div className='footer-items'>
                <div className='logo'>
                    <img loading='lazy' src={logo} alt="footer logo" />
                </div>
                <div className='contacts'>
                    <p>
                        <IoCallOutline/>
                        <span>09033884748</span>
                    </p>
                    <p>
                        <HiOutlineMail/>
                        <span>telufootbalclub@info.com</span>
                    </p>
                    <p>
                        <IoLocationOutline/>
                        <span>Government Quarters. Oke Afo, Iwo. Osun State. Nigeria.</span>
                    </p>
                </div>
            </div>
            <div className='footer-links'>
                <p>Quick Links</p>
                <div className="links-container">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Players</a>
                    <a href="">News</a>
                    <a href="">Gallery</a>
                </div>
            </div>
            <div className='footer-links'>
                <p>Supports</p>
                <div className="links-container">
                    <a href="">FAQs</a>
                    <a href="">Contact Supports</a>
                    <a href="">Terms & condition</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>
                </div>
            </div>
            <div className='footer-socials'>
                <p>Stay Updated</p>
                <span>
                    Get the latest update from our social medias
                </span>
                <div className="socials">
                    <a target='blank' href="">
                        <FaInstagram />
                    </a>
                    <a target='blank' href="">
                        <LuFacebook />
                    </a>
                    <a target='blank' href="">
                        <SlSocialYoutube />
                    </a>                        
                </div>
            </div>
        </div>
        <div className='copywrite'>
            <p>© Copywrite Telu Football Club Official Website</p>
        </div>
    </footer>
  )
}

export default Footer