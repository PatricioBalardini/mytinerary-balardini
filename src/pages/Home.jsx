import DescriptionMain from "../components/DescriptionMain";
import Arrow from "../components/Arrow";
import Card from "../components/Card";

export default function Home() {
  let data = [
    { id: "america1", city: "Cancun", photo: "/img/america/cancun.jpg" },
    { id: "america2", city: "New York", photo: "/img/america/newyork.jpg" },
    {
      id: "america3",
      city: "Rio de Janeiro",
      photo: "/img/america/rioDeJaneiro.jpg",
    },
    { id: "america4", city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
    { id: "asia1", city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
    { id: "asia2", city: "Pekin", photo: "/img/asia/pekin.jpg" },
    { id: "asia3", city: "Singapur", photo: "/img/asia/singapur.jpg" },
    { id: "asia4", city: "Tokyo", photo: "/img/asia/tokio.jpg" },
    { id: "europe1", city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
    { id: "europe2", city: "London", photo: "/img/europe/london.jpg" },
    { id: "europe3", city: "Paris", photo: "/img/europe/paris.jpg" },
    { id: "europe4", city: "Roma", photo: "/img/europe/roma.jpg" },
    { id: "oceania1", city: "Majuro", photo: "/img/oceania/majuro.jpg" },
    { id: "oceania2", city: "Sidney", photo: "/img/oceania/sidney.jpg" },
    { id: "oceania3", city: "Suva", photo: "/img/oceania/suva.jpg" },
    {
      id: "oceania4",
      city: "Wellington",
      photo: "/img/oceania/wellington.jpg",
    },
  ];

  return (
    <div className="main">
      <div className="description-main">
        <DescriptionMain />
      </div>
      <div className="silde">
        <Arrow direction={"fa-solid fa-chevron-left"} />
        {data.slice(0, 4).map((each) => (
          <Card key={each.id} src={each.photo} alt={each.id} text={each.city} />
        ))}
        <Arrow direction={"fa-solid fa-chevron-right"} />
      </div>
    </div>
  );
}
