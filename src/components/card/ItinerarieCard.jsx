/* eslint-disable react/prop-types */
import "./itinerarie-card.scss";

export default function ItinerarieCard({ itinerarie }) {
  return itinerarie ? (
    <div className="itinerarie-card">
      <img src={itinerarie.photo} alt={itinerarie.alt}></img>
      <div className="itinerarie-card--footer">
        <div className="card-footer--text">
          <p>{itinerarie.user}</p>
          <p>{itinerarie.tags}</p>
          <p>{itinerarie.duration}</p>
          <p>{itinerarie.price}</p>
        </div>
      </div>
      <div className="itinerarie-card--expand"></div>
    </div>
  ) : (
    <p>Loading</p>
  );
}
