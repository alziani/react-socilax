import React, { useState } from "react";
import valueImage from "../../images/valueImage.png";
import "./value.css";
import valueData from "./valueData";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Value() {
  const [clasName, setClassName] = useState("");
  return (
    <section className="value-wrapper">
      <div className="paddings innerWidth flexCenter value-container ">
        <div className=" value-left">
          <div className="image-container">
            <img src={valueImage} />
          </div>
        </div>
        <div className="flexColStart value-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {valueData.map((item) => {
              return (
                <AccordionItem
                  key={item.id}
                  className={`accordionItem ${clasName} `}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                      <AccordionItemState>
                        {(expanded) =>
                          expanded ? setClassName("expanded") : setClassName("")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={28} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
