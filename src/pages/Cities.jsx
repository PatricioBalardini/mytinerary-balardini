import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import cityActions from "../redux/actions/citiesActions";
import Card from "../components/card/Card";
import "./cities.scss";

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
      <div className="cities">
        {" "}
        <div className="seeker">
          <BiSearch />
          <input
            className="seeker-input"
            placeholder="Search your city..."
            value={search}
            type="text"
            name="city-search"
            id="city-search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="seeker-cards">
          {filteredCities.map((destiny) => (
            <Card key={destiny._id} card={destiny} />
          ))}
        </div>
        {!filteredCities.length ? <p></p> : null}
      </div>
    </div>
  );
}
