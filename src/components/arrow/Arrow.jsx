import "./arrow.scss";

// eslint-disable-next-line react/prop-types
export default function Arrow({ direction, onClick }) {
  return (
    <button className="arrow">
      <i className={direction} onClick={onClick}></i>
    </button>
  );
}
