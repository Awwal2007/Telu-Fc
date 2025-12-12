import React from 'react'
import Header from '../components/Header'
import section1Image from "../assets/FB_IMG_1765561006646.jpg"
import section3Image from "../assets/FB_IMG_1765561023712.jpg"
import { PiTargetBold } from "react-icons/pi";
import { LuScanEye } from "react-icons/lu";
import { TbCalendarTime } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SlSocialYoutube } from "react-icons/sl";


import Players from '../components/Players';
import logo from "../assets/telu logo.png"

const Home = () => {
  return (
    <>
        <Header/>

        <section className="section1">
            <div className='heading'>
                <h2>What We Do</h2>
                <span></span>
            </div>

            <div className="content-container">
                <div className='left'>
                    <img src={section1Image} alt="section 1 image" />
                </div>

                <div className='right'>
                    <p>Telu football club is not just a football club, it is the first football club with adequate hostel facilities where all payers are camped with zero fee payment. <br /> <br /> Although the primary aim of the football club is basically “Football”, everything that involves the round-leather game is excellently carried out. But to be the best provider of the brightest stars around, we believe there are some extra activities young people must be involved in to have upper chance among peers to make the dream come true.</p>
                    <div>
                        <button>
                            Read more..
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className="section2">
            <div className='left'> 
                <div className="icon-container">
                    <PiTargetBold />
                </div>
                <h3>Our Mission</h3>
                <p>Our mission is to bring out the talent in you  and build players. dkfldfdkjdfjdkldfjdljdjdkj</p>
            </div>
            <hr />
            <div className='left'> 
                <div className="icon-container">
                    <LuScanEye />
                </div>
                <h3>Our Vission</h3>
                <p>Our vission is to bring out the talent in you  and build players. dkfldfdkjdfjdkldfjdljdjdkj</p>
            </div>
        </section>

        <section className="section3">
            <div className='heading'>
                <h2>News</h2>
                <span></span>
            </div>
            <div className="news-container">
                <div className='left'>
                    <div className='image-container'>
                        <img src={section3Image} alt="" />
                    </div>
                    <div className='content'>
                        <div className='time'>
                            <TbCalendarTime />
                            <p>3 hours ago</p>
                        </div>
                        <div>
                            <h3>Adebayo Strong Tackle</h3>
                        </div>
                    </div>
                    <span></span>
                </div>
                <div className='right'>
                    <div className='card'>
                        <div className='image-container'>
                            <img src={section3Image} alt="" />
                        </div>
                        <div>
                            <div className='time'>
                                <TbCalendarTime />
                                <p>3 hours ago</p>
                            </div>
                            <h4>Spurs (A) Ticket</h4>
                        </div>
                        <span></span>
                    </div>

                    <div className='card'>
                        <div className='image-container'>
                            <img src={section3Image} alt="" />
                        </div>
                        <div>
                            <div className='time'>
                                <TbCalendarTime />
                                <p>3 hours ago</p>
                            </div>
                            <h4>Spurs (A) Ticket</h4>
                        </div>
                        <span></span>
                    </div>

                    <div className='card'>
                        <div className='image-container'>
                            <img src={section3Image} alt="" />
                        </div>
                        <div>
                            <div className='time'>
                                <TbCalendarTime />
                                <p>3 hours ago</p>
                            </div>
                            <h4>Spurs (A) Ticket</h4>
                        </div>
                        <span></span>
                    </div>            
                </div>
            </div>
            <div className='button-container'>
                <button>View All News</button>
            </div>
        </section>

        <section className="section4">
            <div className='heading'>
                <h2>Our Players</h2>
                <span></span>
            </div>
            <Players />
            <div className="button-container">
                <button>
                    View all
                </button>
            </div>
        </section>

        <footer>
            <div className='footer-contents'>
                <div className='footer-items'>
                    <div className='logo'>
                        <img src={logo} alt="footer logo" />
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

    </>
  )
}

export default Home