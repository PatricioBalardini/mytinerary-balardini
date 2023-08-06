import "../styles/card.css";

export default function Card({ src, alt, text }) {
  return (
    <div className="card">
      {" "}
      <img src={src} alt={alt}></img>
      <p className="title-silde">{text}</p>
    </div>
  );
}
