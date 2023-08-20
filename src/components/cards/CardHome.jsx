/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card-home.scss";

export default function Card({ card }) {
  return (
    <Link to={"/city/" + card._id} className="card-home">
      <img src={card.photo} alt={card.alt}></img>
      <div className="card-home-footer">
        <div className="card-home-footer--text">
          <h3>{card.city}</h3>
          <p>{card.country}</p>
        </div>
      </div>
    </Link>
  );
}
