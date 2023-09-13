/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Label({ options }) {
  let photo = useSelector((store) => store.users.user?.photo);
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
              <span key={each.title} onClick={each.onClick} className="">
                {each.title}
              </span>
            )
      )}
      {photo && <img src={photo} className="" />}
    </div>
  );
}
