import React from "react";
import "./getStarted.css";

function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />{" "}
            Find your residence soon
          </span>
          <button className="button">
            <a href="https://github.com/alziani">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
