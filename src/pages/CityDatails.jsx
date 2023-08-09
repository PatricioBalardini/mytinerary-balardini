import { useParams } from "react-router-dom";
import "../styles/citydetails.css";

export default function CityDatails() {
  const { city_id } = useParams();

  return <div>CityDatails{city_id}</div>;
}
