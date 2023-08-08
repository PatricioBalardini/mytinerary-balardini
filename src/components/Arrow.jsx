import "../styles/arrow.css";

// eslint-disable-next-line react/prop-types
export default function Arrow({ direction,  onClick }) {
  return (
    <div className="ctn-icono">
      <button className="button">
        <i className={direction} onClick={onClick}></i>
      </button>
    </div>
  );
}
