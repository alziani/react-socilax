import React from 'react';
import heroImage from "../../images/heroImage.png";
import "./hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import Counter from './Counter';
 


function Hero() {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <h1>Discover <br /> Most Suitable <br /> Property</h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)"  size={25} />
                        <input type='text' /> 
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <Counter start={8000} end={9000} duration={4} text={"Premium Product"} />
                        <Counter start={50} end={2000} duration={4} text={"Happy Customer"}/>
                        <Counter start={0} end={20} duration={4} text={"awards Winning"}/>
                    </div>

                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src={heroImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero