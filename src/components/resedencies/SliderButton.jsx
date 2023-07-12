import { React } from "react";
import "./slidesbutton.css";

function SliderButton({ onNext, onPrev }) {
  return (
    <div className="flexCenter r-button">
      <button onClick={onNext}>&lt;</button>
      <button onClick={onPrev}>&gt;</button>
    </div>
  );
}

export default SliderButton;
