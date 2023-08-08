import { useParams } from "react-router-dom";

export default function CityDatails() {
  const { city_id } = useParams();

  return <div>CityDatails{city_id}</div>;
}
