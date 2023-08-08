import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import DescriptionMain from "../components/DescriptionMain";

export default function Home() {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("/data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      <div className="description-main">
        <DescriptionMain />
      </div>
      {show ? (
        <input onClick={() => setShow(!show)} type="button" value="hide" />
      ) : (
        <input onClick={() => setShow(!show)} type="button" value="show" />
      )}
      {show ? <Carousel data={data} /> : <h1>View More</h1>}
    </div>
  );
}
//
