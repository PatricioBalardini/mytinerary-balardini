import { useState } from "react";
import { Link as Anchor } from "react-router-dom";

export default function NavBar() {
  let [show, setShow] = useState(false);
  return (
    <div className="nav-bar">
      <i onClick={() => setShow(!show)} className="fa-solid fa-bars fa-xl"></i>
      {show ? (
        <div className="bar">
          <Anchor to="/home" className="home">
            Home
          </Anchor>
          <Anchor to="/cities" className="cities">
            Cities
          </Anchor>
          <Anchor to="/signin" className="sign-in">
            Sign In
          </Anchor>
          <Anchor to="/signup" className="sign-up">
            Sign Up
          </Anchor>
        </div>
      ) : null}
    </div>
  );
}
