import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../Carousel";
import PrimaryButton from "../buttons/PrimaryButton";
import "./hero.scss";

export default function Hero() {
  // const [show, setShow] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("/data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-left">
          <h1>Find the perfect destination</h1>
          <h3>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </h3>
          <PrimaryButton label="View More" />
        </div>

        {/* {show ? (
        <input onClick={() => setShow(!show)} type="button" value="hide" />
      ) : (
        <input onClick={() => setShow(!show)} type="button" value="show" />
      )}
      {show ? <Carousel data={data} /> : <h1>View More</h1>} */}
        <Carousel data={data} />
      </div>
    </div>
  );
}
