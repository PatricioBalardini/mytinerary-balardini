import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  let [show, setShow] = useState(false);
  return (
    <div className="menu-hamb">
      <i onClick={() => setShow(!show)} className="fa-solid fa-bars"></i>
      {show ? (
        <div>
          <Anchor to="/home" className="home">Home</Anchor>
          <Anchor to="/city" className="cities">Cities</Anchor>
          <Anchor to="/signin" className="sign-in">Sign In</Anchor>
          <Anchor className="sign-up">Sign Up</Anchor>
        </div>
      ) : null}
    </div>
  );
}
