/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ card }) {
  return (
    <Link to={`/cities/${card._id}`} className="card">
      <div className="card-image">
        <img src={card.photo} alt={card.alt} />
      </div>
      <div className="card-footer">
        <div className="card-footer--text">
          <h3>{card.city}</h3>
          <p>{card.country}</p>
        </div>
      </div>
    </Link>
  );
}
