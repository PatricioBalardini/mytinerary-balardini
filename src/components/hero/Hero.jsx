import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "../carousel/Carousel";
import PrimaryButton from "../buttons/PrimaryButton";
import citiesActions from "../../redux/actions/citiesActions";
import "./hero.scss";

const { fetchCitiesCarousel } = citiesActions;

export default function Hero() {
  const navigate = useNavigate();
  const carousel = useSelector((store) => store.cities.carousel);
  const dispatch = useDispatch();
  useEffect(() => {
    if (carousel.length === 0) {
      dispatch(fetchCitiesCarousel());
    }
  }, [carousel.length, dispatch]);

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
        <div className="hero-rigth">
          {/* <div className="hero-rigth--title">
            <h3>Popular Choices</h3>
          </div> */}
          <Carousel data={carousel} />
        </div>
      </div>
    </div>
  );
}
