import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cityActions from "../redux/actions/citiesActions";
import Card from "../components/card/Card";
import "../components/seeker/seeker.scss";

const { fetchCities } = cityActions;

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const [filteredCities, setFilteredCities] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

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
      {/* <div className="city-imgs">
        <div></div>
      </div> */}
      <div className="seeker">
        <div className="seeker-container">
          <input
            className="seeker-input"
            placeholder="Find your next destination..."
            value={search}
            type="text"
            name="city-search"
            id="city-search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="seeker-glass fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="seeker-cards">
        {filteredCities.map((destiny) => (
          <Card key={destiny._id} card={destiny} />
        ))}
      </div>
      {!filteredCities.length ? <p></p> : null}
    </div>
  );
}
