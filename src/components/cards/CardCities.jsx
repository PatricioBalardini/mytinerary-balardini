/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card-cities.scss";

export default function CardCities({ card }) {
  return (
    <Link to={"/city/" + card._id} className="card-cities">
      <img src={card.photo} alt={card.alt}></img>
      <div className="card-cities-footer">
        <div className="card-cities-footer--text">
          <h3>{card.city}</h3>
          <h4>{card.country}</h4>
          <p>{card.featuredLocation}</p>
        </div>
      </div>
    </Link>
  );
}
