// import CardHome from "../cards/CardHome";
// import { useState, useEffect } from "react";
// import "./carousel-cities.scss";

// const CarouselCities = ({ data }) => {
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const maxItems = data.length;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentCardIndex((prevIndex) => (prevIndex + 1) % maxItems);
//     }, 7000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [maxItems]);

//   return (
//     <div className="carousel">
//       <div className="carousel-list">
//         <CardHome key={data[currentCardIndex]._id} card={data[currentCardIndex]} />
//       </div>
//     </div>
//   );
// };

// export default CarouselCities;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import itineraryActions from "../../redux/actions/itinerariesAcitons";
const { readItinerariesFromCity } = itineraryActions;

// eslint-disable-next-line react/prop-types
export default function DetailCity({ src, alt, text, id }) {
  const [show, setShow] = useState(false);
  const itineraries = useSelector(
    (store) => store.itineraries.itinerariesFromCity
  );
  //console.log(itineraries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readItinerariesFromCity({ city_id: id }));
  }, [dispatch, id]);
  return (
    <section className="">
      <img src={src} alt={alt} />
      <p className="">{text}</p>
      <span
        onClick={() => setShow(!show)}
        className=""
      >
        {show ? "hide" : "+info"}
      </span>
      {show &&
        itineraries.map((each, index) => (
          <p className="" key={index}>
            {each.name}
          </p>
        ))}
    </section>
  );
}