import DescriptionMain from "./DescriptionMain";
import Carrusel from "./Carrusel";
import "../styles/main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="description-main">
        <DescriptionMain />
      </div>
      <div className="carrusel">
        <Carrusel />
      </div>
    </div>
  );
}
