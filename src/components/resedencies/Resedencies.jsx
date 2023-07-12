import React, { useEffect, useRef } from "react";
import "./resedencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../data/slider.json";
import CardRes from "./CardRes";
import { sliderSettings } from "./comand";
import SliderButton from "./SliderButton";

function Resedencies() {
  const ref = useRef();

  const handleNext = () => {
    ref.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    ref.current?.swiper.slidePrev();
  };

  return (
    <section className="r-wrapper">
      <div className="paddings innetWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Resedencies</span>
        </div>

        <SliderButton onNext={handleNext} onPrev={handlePrev} />

        <Swiper {...sliderSettings} ref={ref}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <CardRes
                image={card.image}
                price={card.price}
                name={card.name}
                detail={card.detail}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Resedencies;
