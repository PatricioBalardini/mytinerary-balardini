import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cityActions from "../redux/actions/citiesActions";
import Card from "../components/card/Card";

const { fetchCity } = cityActions;

export default function CityDatails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCity(id));
  }, [dispatch, id]);

  const city = useSelector((store) => store.cities.city);

  console.log(city);

  return <Card card={city} />;
}
