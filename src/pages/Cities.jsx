import { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import CardCities from "../components/cards/CardCities";
import "../components/seeker/seeker.scss";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  useEffect(() => {
    axios(apiUrl + "cities?city=" + text.current.value)
      .then((res) => setCities(res.data.response))
      .catch((err) => console.log(err));
  }, [reEffect]);
  function handleFilter() {
    console.log(text.current.value);
    setReEffect(!reEffect);
  }
  return (
    <div className="container">
      <div className="seeker">
        <input
          placeholder="Find your next destination..."
          ref={text}
          type="text"
          name="text"
          id="text"
          onKeyUp={handleFilter}
        />
        <div className="seeker-cities">
          {" "}
          {cities.map((destiny) => (
            <p key={destiny._id}>{destiny.city}</p>
          ))}
        </div>
      </div>
      <div className="seeker-card">
        {cities.map((destiny) => (
          <CardCities key={destiny._id} card={destiny} />
        ))}
      </div>
    </div>
  );
}
