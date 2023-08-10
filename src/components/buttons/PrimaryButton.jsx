/* eslint-disable react/prop-types */
import "./primary-button.scss";

export default function PrimaryButton({ label = "primary", ...props }) {
  return (
    <button className="primary-button" {...props}>
      {label}
    </button>
  );
}
