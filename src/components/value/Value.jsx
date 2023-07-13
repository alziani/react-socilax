import React from "react";
import valueImage from "../../images/valueImage.png";
import "./value.css";
import ValueAccordion from "./ValueAccordion";
import valueData from "./valueData.json";

function Value() {
  return (
    <section className="value-wrapper">
      <div className="paddings innerWidth  value-container ">
        <div className=" value-left">
          <div className="image-container">
            <img src={valueImage} />
          </div>
        </div>
        <div className="value-right">
          <div className=" flexColStart r-head">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give to You</span>
            <span className="secondaryText">
              We always ready to help by providijng the best services for you.{" "}
              <br />
              We beleive a good blace to live can make your life better
            </span>
          </div>
          <div>
            {valueData.map((data, indx) => (
              <ValueAccordion
                key={indx}
                title={data.title}
                text={data.description}
                eventKey={indx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;
