import ButtonViewMore from "./ButtonViewMore";
import "../styles/descriptionmain.css";

export default function DescriptionMain() {
  return (
    <div className="ctn-description-main">
      <h3 className="main-title">Find the perfect destination</h3>
      <p className="main-description">
        Our app will help you find the perfect patch for you next trip. Whit an
        easy-to-use interface and a host of itinerari options, plannig your next
        trip has never been easier.
      </p>
      <div className="ctn-button-more">
        <ButtonViewMore />
      </div>
    </div>
  );
}
