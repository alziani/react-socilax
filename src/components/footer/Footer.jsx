import React from "react";
import "./footer.css";
import logoo from "../../images/logo2.png";

export default function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src={logoo} alt="" />
          <span className="secondaryText">
            Our vision is to make all people the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span> About us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
