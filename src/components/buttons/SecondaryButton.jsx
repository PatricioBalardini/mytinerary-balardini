/* eslint-disable react/prop-types */
import "./secondary-button.scss";

export default function SecondaryButton({ label = "Secondary", ...props }) {
  return (
    <button className="secondary-button" {...props}>
      <i className="secondary-button--icon fa-solid fa-user user-login" />
      {label}
    </button>
  );
}
