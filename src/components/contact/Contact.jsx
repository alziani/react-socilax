import React from "react";
import "./contact.css";
import contact from "../../images/contact.jpg";
import ContactModes from "./ContactModes";
import data from "./data";

function Contact() {
  return (
    <section className="contact-wrapper">
      <div className="paddings innerWidth  contactContainer">
        {/* left Side */}
        <div className="flexColStart contact-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to contact</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br /> We beleive a sgood blace to live can make your life better
          </span>

          <div className=" contactModes">
            {data.map((item) => {
              return (
                <ContactModes
                  key={item.id}
                  text={item.text}
                  Icon={item.Icon}
                  number={item.number}
                  Ctype={item.Ctype}
                />
              );
            })}
          </div>
        </div>

        {/* right Side */}
        <div className="contact-right">
          <div className="image-container">
            <img src={contact} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
