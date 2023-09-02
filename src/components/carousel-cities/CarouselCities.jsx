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
