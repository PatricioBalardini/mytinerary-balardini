import "../styles/arrow.css";

export default function Arrow({ direction,  onClick }) {
  return (
    <div className="ctn-icono">
      <button className="button">
        <i className={direction} onClick={onClick}></i>
      </button>
    </div>
  );
}
