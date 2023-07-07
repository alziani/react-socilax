import React from 'react';
import heroImage from "../../images/heroImage.png";
import "./hero.css"

function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
              <div className="hero-left">
                left section
              </div>
              <div className="flexCenter hero-right">
                   <div className="image-container">
                    <img src={heroImage}  />
                   </div>
              </div>
        </div>
    </section>
  )
}

export default Hero