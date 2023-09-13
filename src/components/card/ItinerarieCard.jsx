/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiHeart, BiChevronDown } from "react-icons/bi";
import "./itinerarie-card.scss";

export default function ItinerarieCard({ itinerarie }) {
  const [expand, setExpand] = useState(false);
  return itinerarie ? (
    <div className="itinerarie-card">
      <h3>{itinerarie.name}</h3>
      <div className="itinerarie-card--cover">
        <img src={itinerarie.photo} alt={itinerarie.alt}></img>
      </div>

      <div className="itinerarie-card--footer">
        <div className="itinerarie-card--footer-likes">
          <BiHeart />
          <p>1</p>
        </div>
        <button
          className="itinerarie-card--footer-toggle"
          onClick={() => setExpand(!expand)}
        >
          <BiChevronDown />
        </button>
      </div>
      {expand ? (
        <div className="itinerarie-card--expand">
          <div className="itinerarie-card--expand-item">
            <label>User:</label>
            <p>{itinerarie.user}</p>
          </div>
          <div className="itinerarie-card--expand-item">
            <label>Tags:</label>
            <p>{itinerarie.tags}</p>
          </div>
          <div className="itinerarie-card--expand-item">
            <label>Duration:</label>
            <p>{itinerarie.duration}</p>
          </div>
          <div className="itinerarie-card--expand-item">
            <label>Price:</label>
            <p>{itinerarie.price}</p>
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <p>Loading</p>
  );
}
