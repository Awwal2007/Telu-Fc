import React from 'react'
import Nav from '../components/Nav'

import section1Image from "../assets/DSC_4794-1.jpg"
import teluImage from "../assets/FB_IMG_1765616505990.jpg"


import { GiGraduateCap } from "react-icons/gi";
import { FaPersonRunning } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className='about'>
        <header className="about-header">
            <Nav about="active" />
            <div className="hero">
                <h1>About Us</h1>
                <p>The name “Telu” is coined from the name of the grand patron of the football club, the Oluwo of Iwoland, Oba AbdulRosheed Adewale Akanbi Telu 1.  Telu fc</p>
                {/* <button>
                    Join Us
                </button> */}
            </div> 
        </header>

        {/* About Section 1 */}
        <section className="sec1">
            <div className='heading'>
                <h2>Our Story</h2>
                <span></span>
            </div>
            <div className="content-container">
                <div className='left'>
                    <p>Telu football club is not just a football club, it is the first football club with adequate hostel facilities where all payers are camped with zero fee payment. <br /> <br /> Although the primary aim of the football club is basically “Football”, everything that involves the round-leather game is excellently carried out. But to be the best provider of the brightest stars around, we believe there are some extra activities young people must be involved in to have upper chance among peers to make the dream come true. <br /> <br /> The name “Telu” is coined from the name of the grand patron of the football club, the Oluwo of Iwoland, Oba AbdulRosheed Adewale Akanbi Telu 1.  Telu Football Club was founded in 2019 and it has proven to be one of the best among his peers in all tiers of any registered football academy in the country. </p>
                    <div>
                        <button>
                            Read more..
                        </button>
                    </div>
                </div>

                <div className='right'>
                    <img loading='lazy' src={section1Image} alt="section 1 image" />
                </div>
            </div>
        </section>

        {/* About Section 2 */}
        <section className="sec2">
            <div className='heading'>
                <h2>What We Offer</h2>
                <span></span>
            </div>

            <div className="content">
                <div className='left'> 
                    <div className="icon-container">
                        <GiGraduateCap />
                    </div>
                    <h3>Free Education</h3>
                    <p>Our mission is to bring out the talent in you  and build players. dkfldfdkjdfjdkldfjdljdjdkj</p>
                </div>
                <hr />
                <div className='left'> 
                    <div className="icon-container">
                        <FaPersonRunning />
                    </div>
                    <h3>Free Training</h3>
                    <p>Our vission is to bring out the talent in you  and build players. dkfldfdkjdfjdkldfjdljdjdkj</p>
                </div>
                <hr />
                <div className='left'> 
                    <div className="icon-container">
                        <MdWorkHistory />
                    </div>
                    <h3>Free Craft Work</h3>
                    <p>Our vission is to bring out the talent in you  and build players. dkfldfdkjdfjdkldfjdljdjdkj</p>
                </div>
            </div>
        </section>
        
        <section className="sec3">
            <div className='heading'>
                <h2>Our Grand Patron</h2>
                <span></span>
            </div>

            <div className="content">
                <div className='patron-image'>
                    <img src={teluImage} alt="telu image" />
                </div>
                <div className='patron-details'>
                    <h2>
                        HRM
                    </h2>    
                    <span> Oba Abdulrosheed Adewale Akanbi Telu 1</span> 
                    <p>HRM Oba Abdulrosheed Adewale Akanbi Telu 1 of Iwoland is the grand patron of our football club </p>
                </div>
            </div>
        </section>

        <Footer />

    </div>
  )
}

export default About