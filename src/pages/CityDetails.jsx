import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cityActions from "../redux/actions/citiesActions";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ItinerarieCard from "../components/card/ItinerarieCard";
import axios from "axios";
import apiUrl from "../apiUrl";
import "./city-details.scss";

const { fetchCity } = cityActions;

export default function CityDetails() {
  const { id } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fechCityItineraries = async () => {
      try {
        let data = await axios.get(`${apiUrl}/itineraries?city_id=${id}`);
        setItineraries(data.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    dispatch(fetchCity(id));
    fechCityItineraries();
  }, [dispatch, id]);

  const city = useSelector((store) => store.cities.city);
  console.log(itineraries);

  return (
    <div className="container">
      <section className="city-details">
        <div className="city-details--header">
          <h2>{city.city}</h2>
          <img src={city.photo} alt={city.city} />
        </div>
        <div className="city-details--description">
          <p>{city.description}</p>
          <PrimaryButton label="View Itineraries" />
        </div>
        <div className="city-details--itineraries">
          <h3>Itineraries</h3>
          <div className="city-details--itineraries-list">
            {itineraries.map((itinerarie) => (
              <ItinerarieCard key={itinerarie._id} itinerarie={itinerarie} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
