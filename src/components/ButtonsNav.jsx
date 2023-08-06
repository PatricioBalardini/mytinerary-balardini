import "../styles/buttonsnav.css";

export default function ButtonsNav({ name }) {
  const cities = "Cities";
  const home = "Home";
  return (
    <div className="buttons">
      <div className="buttons-nav">
        <button className={name}>{home}</button>
      </div>
      <div className="buttons-nav">
        <button className={name}>{cities}</button>
      </div>
    </div>
  );
}
