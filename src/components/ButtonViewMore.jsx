import { Link as Anchor } from "react-router-dom"
import "../styles/buttonviewmore.css";

export default function ButtonViewMore() {
  const name = "View More";
  return (
    <div className="view-more">
      <Anchor to="/.cities">{name}</Anchor>
    </div>
  );
}
