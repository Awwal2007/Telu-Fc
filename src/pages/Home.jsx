import React from 'react'
import Header from '../components/Header'
import section1Image from "../assets/FB_IMG_1765561006646.jpg"
import section3Image from "../assets/FB_IMG_1765561023712.jpg"
import { PiTargetBold } from "react-icons/pi";
import { LuScanEye } from "react-icons/lu";
import { TbCalendarTime } from "react-icons/tb";



import Players from '../components/Players';
import Footer from '../components/Footer';
import useMediaQuery from '../components/MediaQuery';
import PlayersMobile from '../components/PlayersMobile';


const Home = () => {
    const mobile = useMediaQuery("(max-width: 768px)")
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
                    <img loading='lazy' src={section1Image} alt="section 1 image" />
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
                        <img  loading='lazy' src={section3Image} alt="" />
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
                            <img loading='lazy' src={section3Image} alt="" />
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
                            <img loading='lazy' src={section3Image} alt="" />
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
                            <img loading='lazy' src={section3Image} alt="" />
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
            {mobile ? <PlayersMobile /> : <Players /> }
            
            <div className="button-container">
                <button>
                    View all
                </button>
            </div>
        </section>

        <Footer />

    </>
  )
}

export default Home