import React from "react";
import "./contact.css";

function ContactModes({ Icon, text, number, Ctype }) {
  return (
    <div className="flexStart r">
      <div className="flexColCenter mode">
        <div className="flexStart">
          <div className="flexCenter icon ">
            <Icon />
          </div>
          <div className="flexColStart detaill">
            <span className="primaryText">{text}</span>
            <span className="secondaryText">{number}</span>
          </div>
        </div>
        <div className="flexCenter button">{Ctype}</div>
      </div>
    </div>
  );
}

export default ContactModes;
