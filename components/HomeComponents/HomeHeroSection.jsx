import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyle.css'
import TransparentBtn from '../MadisButtons/TransparentBtn';


const HomeHeroSection = () => {
    return (
        <>
            <section className="hmBnr">
                <div className="hmBrImg ">
                    <div className="video_banner">
                        <video autoPlay muted loop playsInline className="bgImg">
                            <source src="https://cdn.mdsbrand.com/madis/assets/videos/home-banner.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" /> Your browser does
                            not
                            support the video tag.
                        </video>
                    </div>
                </div>
                <div className="left-edge-banner">
                    <div className="banner-content">
                        <small>PRESS RELEASE</small>
                        <h3>MADIS MARINE wins award like never seen before <a href="javascript:void(0)">Learn More</a></h3>
                    </div>
                </div>
                <div className="hmBnrTxt">
                    <div>
                        <h1 className="bnrHeding">
                            Your Hometown Boat Experts
                        </h1>
                    </div>
                    <div className="text-center mt-md-5">
                        <TransparentBtn button_link="/boats-for-sale" button_title="Browse Boats" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeHeroSection