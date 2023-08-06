import ButtonViewMore from "./ButtonViewMore";
import "../styles/descriptionmain.css";

export default function DescriptionMain() {
  const title = "Find the perfect destination";
  const description =
    "Our app will help you find the perfect patch for you next trip. Whit aneasy-to-use interface and a host of itinerari options, plannig your nexttrip has never been easier.";

  return (
    <div className="ctn-description-main">
      <h3 className="main-title">{title}</h3>
      <p className="main-description">{description}</p>
      <div className="ctn-button-more">
        <ButtonViewMore />
      </div>
    </div>
  );
}
