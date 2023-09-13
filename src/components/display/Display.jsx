/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Display({ options }) {
  return (
    <div className="">
      {options.map((each) =>
        each.to
          ? each.show &&
            (each.to === "/sign-in" ? (
              <Link key={each.to} to={each.to} className="">
                {each.title}
              </Link>
            ) : (
              <Link key={each.to} to={each.to} className="">
                {each.title}
              </Link>
            ))
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                style={{ backgroundColor: { hover: each.hover } }}
                className=""
              >
                {each.title}
              </span>
            )
      )}
    </div>
  );
}
