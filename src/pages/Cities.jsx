import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import CardCities from "../components/cards/CardCities";
import "../components/seeker/seeker.scss";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios(`${apiUrl}/cities`)
      .then((res) => {
        setCities(res.data.response);
        setFilteredCities(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (search !== "") {
      let filteredData = cities.filter(({ city }) =>
        city.toLowerCase().includes(search)
      );
      setFilteredCities(filteredData.length ? filteredData : []);
    } else {
      setFilteredCities(cities);
    }
  }, [search, cities]);

  return (
    <div className="container">
      <div className="seeker">
        <input
          placeholder="Find your next destination..."
          value={search}
          type="text"
          name="city-search"
          id="city-search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="seeker-cards">
        {filteredCities.map((destiny) => (
          <CardCities key={destiny._id} card={destiny} />
        ))}
      </div>
      {!filteredCities.length ? <p>No cities found</p> : null}
    </div>
  );
}
