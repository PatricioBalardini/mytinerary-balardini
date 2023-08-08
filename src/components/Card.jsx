/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import "../styles/card.css";

export default function Card({ src, alt, text, id }) {
  return (
    <Anchor to={"/city/"+id} className="card">
      {" "}
      <img src={src} alt={alt}></img>
      <p className="title-silde">{text}</p>
    </Anchor>
  );
}
