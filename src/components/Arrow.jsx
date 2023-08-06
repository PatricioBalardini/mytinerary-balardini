import "../styles/arrow.css";

export default function Arrow({ direction }) {
  return (
    <div className="ctn-icono">
      <button className="button">
        <i className={direction}></i>
      </button>
    </div>
  );
}
