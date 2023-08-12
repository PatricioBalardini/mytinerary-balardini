import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Carousel from "../carousel/Carousel";
import PrimaryButton from "../buttons/PrimaryButton";
import "./hero.scss";

export default function Hero() {
  // const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios("/data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <div className="hero-left">
          <h1>Find the perfect destination for your trip</h1>
          <h3>
            Designed by insiders who know and love their cities, we have the
            best posibilitiess for your travel.
          </h3>
          <PrimaryButton label="View More" onClick={() => navigate("/login")} />
        </div>
        {/* {show ? (
        <input onClick={() => setShow(!show)} type="button" value="hide" />
      ) : (
        <input onClick={() => setShow(!show)} type="button" value="show" />
      )}
      {show ? <Carousel data={data} /> : <h1>View More</h1>} */}
        <div className="hero-rigth">
          {/* <div className="hero-rigth--title">
            <h3>Popular Choices</h3>
          </div> */}
          <Carousel data={data} />
        </div>
      </div>
    </div>
  );
}
