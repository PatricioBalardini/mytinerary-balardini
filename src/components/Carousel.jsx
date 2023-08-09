/* eslint-disable react/prop-types */
import Arrow from "./Arrow";
import Card from "./Card";
import { useState } from "react";
import "../styles/carousel.css";

const Carousel = ({ data }) => {
  let [counter, setCounter] = useState(0);
  let [counterTo, setCounterTo] = useState(4);

  function next_slide() {
    if (data.length <= counterTo) {
      setCounter(0);
      setCounterTo(4);
    } else {
      setCounter(counter + 4);
      setCounterTo(counterTo + 4);
    }
  }

  function prev_slide() {
    if (counter <= 0) {
      setCounter(data.length - 4);
      setCounterTo(data.length);
    } else {
      setCounter(counter - 4);
      setCounterTo(counterTo - 4);
    }
  }
  return (
    <div className="silde" onClick={prev_slide}>
      <div><h5>Popular Mytiniraries</h5></div>
      <Arrow direction={"fa-solid fa-chevron-left"} />
      {data.slice(counter, counterTo).map((each) => (
        <Card
          key={each.id}
          src={each.photo}
          alt={each.id}
          text={each.city}
          id={each.id}
        />
      ))}
      <Arrow direction={"fa-solid fa-chevron-right"} onClick={next_slide} />
    </div>
  );
};

export default Carousel;
