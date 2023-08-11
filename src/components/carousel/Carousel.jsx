/* eslint-disable react/prop-types */
import Arrow from "../arrow/Arrow";
import Card from "../card/Card";
import { useState, useEffect, useCallback, useMemo } from "react";
import "./carousel.scss";

const Carousel = ({ data }) => {
  let [counter, setCounter] = useState(0);
  let [counterTo, setCounterTo] = useState(4);
  const maxItems = useMemo(() => data.length, [data]);

  const handleNextSilde = useCallback(() => {
    if (maxItems <= counterTo) {
      setCounter(0);
      setCounterTo(4);
    } else {
      setCounter(counter + 4);
      setCounterTo(counterTo + 4);
    }
  }, [counter, counterTo, maxItems]);

  const handlePrevSilde = () => {
    if (counter <= 0) {
      setCounter(maxItems - 4);
      setCounterTo(maxItems);
    } else {
      setCounter(counter - 4);
      setCounterTo(counterTo - 4);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => handleNextSilde(), 7000);
    return () => {
      clearInterval(intervalId);
    };
  }, [handleNextSilde]);

  return (
    <div className="carousel" onClick={handlePrevSilde}>
      <Arrow direction={"fa-solid fa-chevron-left"} />
      <div className="carousel-list">
        {data.slice(counter, counterTo).map((destiny) => (
          <Card key={destiny.id} card={destiny} />
        ))}
      </div>
      <Arrow
        direction={"fa-solid fa-chevron-right"}
        onClick={handleNextSilde}
      />
    </div>
  );
};

export default Carousel;
